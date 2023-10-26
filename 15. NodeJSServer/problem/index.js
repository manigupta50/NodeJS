import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // TODO: Store user query in "query.txt"
      const queryData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
      fs.appendFileSync('queries.txt', queryData, (err) => {
        if(err) console.log(err);
      });

      // TODO: Use Nodemailer to send confirmation email
      const mailContent = {
        from: 'codingninjas2k16@gmail.com',
        to: email,
        subject: 'Query received',
        text: message
      };
      transporter.sendMail(mailContent, (err) => {
        if(err) console.log(err);
        else customEvent.mailSent(email);
      });

      // TODO: Emit "mailSent" event
      

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
