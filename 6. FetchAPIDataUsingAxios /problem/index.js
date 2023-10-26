// Please do not change the prewritten code

const { default: axios } = require("axios");

const Solution = async () => {
  // Write your code here

  // Axios Request Without Async/Await
  // axios.get('https://api.codingninjas.com/api/v3/event_tags')
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // Axios Request With Async/Await
  try {
    const res = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(res.data);
  } catch(err) {
    console.log(err);
  }
};
Solution();
module.exports = Solution;
