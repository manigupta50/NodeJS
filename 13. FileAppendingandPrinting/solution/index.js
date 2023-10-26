// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method == 'POST') {
    let dataBody = '';
    req.on('data', (chunk) => {
      dataBody += chunk;
    });

    req.on('end', () => {
      fs.appendFileSync('data.txt', dataBody);
      const fileData = fs.readFileSync('data.txt', 'utf8');
      console.log(fileData);
    });

    res.end("data received");
  }
});

export default server;
