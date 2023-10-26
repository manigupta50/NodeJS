import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import JobPortalController from './src/controllers/job.controller.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
const jobPortalController = new JobPortalController();

dotenv.config({path: './config'});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.use(express.static('public'));      // for accessing public folder content anywhere in project

app.set('view engine', 'ejs');
app.set('views',path.join(path.resolve(), 'src', 'views'));

// Routes description
app.get('/', jobPortalController.homePage);
app.get('/jobs', jobPortalController.getJobs);
app.get('/job/:id', jobPortalController.getJobDetail);
app.get('/login', jobPortalController.loginRecruiter);
app.get('/job/:id/applicants/', jobPortalController.getApplicant);
// app.get('/job/:id/applicants/', jobPortalController.getApplicant);

app.post(
    '/jobs',
    uploadFile.single('resume'),
    // jobPortalController.getJobs,
    jobPortalController.postAddApplicant
);

app.get('/postjob', jobPortalController.getAddJob);
app.post('/job', jobPortalController.postAddJob);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});