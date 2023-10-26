// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  // Write your code here

  fs.writeFileSync('notes.txt', 'The world has enough coders ');
  const data = fs.readFileSync('notes.txt', 'utf8');
  console.log(data);

  fs.appendFileSync('notes.txt', 'BE A CODING NINJA!');
  const data2 = fs.readFileSync('notes.txt', 'utf8');
  console.log(data2);

};
Solution();
module.exports = Solution;
