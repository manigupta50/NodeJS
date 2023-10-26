// Write your code here

import * as readline from 'readline';
import * as blogActions from './blogActions.js';
import * as path from 'path';

const interfaceReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfaceReadLine.question('Write the Blog Content:', (blogContent) => {
    blogActions.writeBlog('myblog.txt', blogContent);
    interfaceReadLine.close();
    console.log(blogActions.publishBlog('myblog.txt'));
})

// const filePath = path.resolve('myblog.txt');

// blogActions.publishBlog(filePath);
