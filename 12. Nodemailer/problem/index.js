// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';


const Solution = () => {
  // Write your code here
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    }
  });

  const interfaceReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  interfaceReadLine.question('please enter your mail ', (receiverEmail) => {
    const mailContent = {
      from: 'codingninjas2k16@gmail.com',
      to: receiverEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
    };

    interfaceReadLine.close();
    try {
      transporter.sendMail(mailContent);
      console.log('Success: Email sent to'+ receiverEmail);
    } catch(err) {
      console.log('Email Send Failed. Error: ' + err);
    }
  });

};

export default Solution;
