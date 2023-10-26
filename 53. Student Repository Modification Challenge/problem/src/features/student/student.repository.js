//No need to change code other than the last four methods
import { ObjectId } from 'mongodb';
import { getClient, getDB } from '../../config/mongodb.js';

const collectionName = 'students';

class studentRepository {


    async addStudent(studentData) {
        const db = getDB();
        await db.collection(collectionName).insertOne(studentData);
    }

    async getAllStudents() {
        const db = getDB();
        const students = await db.collection(collectionName).find({}).toArray();
        return students;
    }


    //You need to implement methods below:

    async createIndexes() {
        try {
            const db = getDB();
            await db.collection(collectionName).createIndex({ name: 1});
            await db.collection(collectionName).createIndex({ age: 1, grade: -1});
        } catch(err) {
            console.log("Something went wrong.\n" + err);
        }
        return "Indexes created successfully";
    }

    async getStudentsWithAverageScore() {
        const db = getDB();
        try {
            const result = await db
                .collection(collectionName)
                .aggregate( [ 
                    {
                        $unwind: "$assignments",
                    },
                    {
                        $unwind: "$assignments.score",
                    },
                    // {
                    //     $group: {
                    //         name: "$name",
                    //         averageScore: {
                    //             $avg: "$assignments.score"
                    //         }
                    //     }
                    // }
                ]);
            return result;
        } catch(err) {
            console.log("Something went wrong.\n" + err);
        }
    }

    async getQualifiedStudentsCount() {
        const db = getDB();
        try {
            const result = await db
                .collection(collectionName)
                .aggregate( [ 
                    {
                        $match: {
                            $and: [
                                { age: { $gt: 9 } },
                                { grade: { $lte: "B" } },
                                { $and: [
                                    { "assignments.title": "Math" },
                                    { "assignments.score": { $gte: 60 } } 
                                ] }
                            ] 
                        }
                    },
                    {
                        $count: "qualifiedStudentsCount"
                    }
                ] );
            return result;
        } catch(err) {
            console.log("Something went wrong.\n" + err);
        } 
    }

    async updateStudentGrade(studentId, extraCreditPoints) {
        const db = getDB();
        try {
            const result = await db
                .collection(collectionName)
                .aggregate( [
                    { $project: 
                        { _id: new ObjectId(studentId) } 
                    },
                    { $unwind: "$assignments" },
                    { $avg: [extraCreditPoints + "$assignments.score"] }
                ] );
        } catch(err) {
            console.log("Something went wrong.\n" + err);
        } 
    }

};

export default studentRepository;
