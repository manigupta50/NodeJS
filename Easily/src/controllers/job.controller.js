import PostJobModel from '../models/job.model.js';
import PostAplicantModel from '../models/applicants.model.js';

class JobPortalController {
    homePage(req, res) {
        res.render('home');
    }

    getJobs(req, res) {
        var jobs = PostJobModel.getAll();
        // console.log(jobs);
        res.render('jobPage', { jobs });
    }

    getJobDetail(req, res) {
        const id = req.params.id;
        // const id=2;
        const jobFound = PostJobModel.getById(id);
        console.log(jobFound.requiredSkills.length); 
        if (jobFound) {
            res.render('jobDetailsPage', {
                job: jobFound,
                errorMessage: null,
            });
        }
        else {
            res.status(401).send('Product not found');
        }
    }

    getApplicant(req, res){
        var applicants = PostAplicantModel.getAll();  
        res.render('applicants', { applicants });
    }

    // Adding/Saving Applicant details after [apply] the Job

    postAddApplicant(req, res) {
        // console.log("Applicant details: ", req.body);
        const{ name, email, contact } = req.body;
        const resumeUrl = 'resume/' + req.file.filename;
        // console.log(resumeUrl);
        PostAplicantModel.add(name, email, contact, resumeUrl);
        // var applicants = PostAplicantModel.getAll();
        // res.render('applicants', { applicants });
        res.redirect('/jobs');
    }

    // ################################# After Recruiter Login ########################
    loginRecruiter(req, res) {
        res.render('login');
    }

    getAddJob(req, res){
        res.render('new-job.ejs');
    }

    postAddJob(req, res) {
        // Used {urlencoded} in [index.js] file if data is not received by server
        // console.log("Before Post new Job: ",req.body);
        PostJobModel.add(req.body);

        res.redirect('/jobs');
    }

}

export default JobPortalController;
