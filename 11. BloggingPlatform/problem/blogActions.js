// Write your code here
// import * as readline from 'node:readline';
// import * as readline from 'readline';
import * as fs from 'fs';


export function writeBlog(filePath, blogContent) {


    // interfaceReadLine.question('Write the Blog Content:\n', (blogContent) => {
        fs.appendFileSync(filePath, blogContent); //, (err) => {
        //     if(err) console.log(err);
        //     else interfaceReadLine.close();
        // });
    // });
}

export function publishBlog(filePath) {
    return fs.readFileSync(filePath, 'utf8'); //, 
    // (err, data) => {
    //     // if(err) console.log(err);
    //     // else {
    //     //     console.log(data);
    //     //     // return data;
    //     }
    // });
}