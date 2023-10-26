export default class PostAplicantModel {
    constructor(id, name, email, contact, resume) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.contact = contact;
      this.resume = resume;
    }
  
    static getAll() {
      return applicants;
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
  
    static add(name, email, contact, resumeUrl) {
      let newApplicant = new PostAplicantModel(
        applicants.length + 1,
        name,
        email,
        contact,
        resumeUrl
      );
      applicants.push(newApplicant);
    }
  
    // static getById(id) {
    //   return applicants.find((p) => p.jobId == id);
    // }
  }
  
  var applicants = [
    new PostAplicantModel(
        1,
        'Manish',
        'manigupta012@gmail.com',
        '8013317458',
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
  ];
  