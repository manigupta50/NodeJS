// Import required module
const readline = require('readline');

const Solution = () => {
  // Write your code here
  const interFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  interFace.question("Enter the first number: ", (num1) => {
    interFace.question("Enter the second number: ", (num2) => {
      if(Number(num1) > Number(num2)) {
        console.log("The maximum of the two numbers is: " + num1);
        interFace.close();
      } else if(Number(num2) > Number(num1)) {
        console.log("The maximum of the two numbers is: " + num2);
        interFace.close();
      } else {
        console.log("Both the numbers are equal");
        interFace.close();
      }
    })
  });
};

Solution();
module.exports = Solution;
