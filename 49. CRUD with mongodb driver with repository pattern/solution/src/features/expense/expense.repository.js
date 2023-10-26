import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      await collection.insertOne(expense);
      return expense;
    } catch(err) {
      throw new Error("Something went wrong with Database");
    }
  }

  // Get one expense by its ID
  async getOne(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.findOne({_id: new ObjectId(id)});
    } catch(err) {
      console.log(err);
      throw new Error("Something went wrong with Database");
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.find().toArray();
    } catch(err) {
      console.log(err);
      throw new Error("Something went wrong with Database");
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.updateOne({_id: new ObjectId(id)}, {$push: {tags: tag}});
    } catch(err) {
      console.log(err);
      throw new Error("Something went wrong with Database");
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    try {
      const { minPrice, maxPrice, tags} = criteria;
      const db = getDB();
      const collection = db.collection(this.collectionName);
      let filteredExpense = {};
      if(minPrice) {
        filteredExpense.amount = {$gte: parseFloat(minPrice)};
      }
      if(maxPrice) {
        filteredExpense.amount = {...filteredExpense.amount, $lte: parseFloat(maxPrice)};
      }
      if(tags) {
        filteredExpense.tags = tags;
      }
      return await collection.find(filteredExpense).toArray();
    } catch(err) {
      console.log(err);
      throw new Error("Something went wrong with Database");
    }
  }
}

export default ExpenseRepository;
