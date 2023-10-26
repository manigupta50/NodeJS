import ExpenseRepository from "./expense.repository.js";
import ExpenseModel from "./expense.model.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    try {
      const {title, amount, date, isRecurring, tags} = req.body;
      // const date = new Date().toUTCString();
      console.log(date);
      const newExpense = new ExpenseModel(title, parseFloat(amount), date, isRecurring, tags);
      await this.expenseRepository.addExpense(newExpense);
      res.status(201).send(newExpense);
    } catch(err) {
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
  };

  // Get a specific expense
  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const expense = await this.expenseRepository.getOne(id);
      if(!expense) {
        return res.status(404).send("Expense Not Found");
      } else {
        return res.status(200).send(expense);
      }
    } catch(err) {
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try {
      const expense = await this.expenseRepository.getAllExpenses();
      res.status(200).send(expense);
    } catch(err) {
      console.log(err);
      return res.status(200).send("Something Went Wrong");
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    try {
      const { tag } = req.body;
      const id = req.params.id;
      const addition = await this.expenseRepository.addTagToExpense(id, tag);
      res.status(200).send(addition);
    } catch(err) {
      console.log(err);
      return res.status(200).send("Something Went Wrong");
    }
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try {
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const tags = req.query.tags;
      const criteria = { minPrice, maxPrice, tags};
      const filteredExpense = await this.expenseRepository.filterExpenses(criteria);
      res.status(200).send(filteredExpense);
    } catch(err) {
      console.log(err);
      return res.status(200).send("Something Went Wrong");
    }
  };
}
