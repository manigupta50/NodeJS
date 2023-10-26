export default class PostJobModel {
    constructor(jobId, jobCategory, jobDesignation, jobLocation, companyName, salary, totalOpenings, requiredSkills, date) {
      this.jobId = jobId;
      this.jobCategory = jobCategory;
      this.jobDesignation = jobDesignation;
      this.jobLocation = jobLocation;
      this.companyName = companyName;
      this.salary = salary;
      this.totalOpenings = totalOpenings;
      this.requiredSkills = requiredSkills;
      this.date = date;
    }
  
    static getAll() {
      return jobs;
    }

    static getById(id) {
      return jobs.find((p) => p.jobId == id);
    }

    static add(newJobData) {
      let newJob = new PostJobModel(
        jobs.length + 1,
        newJobData.job_category,
        newJobData.job_designation,
        newJobData.job_location,
        newJobData.company_name,
        newJobData.salary,
        newJobData.number_of_openings,
        newJobData.skills_required,
        newJobData.apply_by
      );
      jobs.push(newJob);
    }
  
    // static update(productObj) {
    //   const index = products.findIndex(
    //     (p) => p.id == productObj.id
    //   );
    //   products[index] = productObj;
    // }
  
    // static delete(id) {
    //   const index = products.findIndex(
    //     (p) => p.id == id
    //   );
    //   products.splice(index, 1);
    // }
  
  }
  
  var jobs = [
    new PostJobModel(
        1,
        'Tech',
        'SDE',
        'Gurgaon HR IND Remote',
        'Coding Ninjas',
        '14-20lpa',
        '5',
        ['REACT', 'NodeJs', 'Js', 'SQL', 'MongoDB', 'Express', 'AWS'],
        '9/15/2023, 8:54:20 PM'
    ),
    new PostJobModel(
        2,
        'Tech',
        'Angular Developer',
        'Pune IND On-Site',
        'Go Digit',
        '6-10lpa',
        '3',
        ['Angular', 'NodeJs', 'Js', 'SQL', 'MongoDB', 'AWS'],
        '9/18/2023, 8:54:20 PM'
    ),
  ];
  