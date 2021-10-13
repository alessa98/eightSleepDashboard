const jsonOne = require("../userIntervals/intervalOne.json");
const jsonTwo = require("../userIntervals/intervalTwo.json");
const jsonThree = require("../userIntervals/intervalThree.json");

module.exports = {
  getUserIntervals: (req, res, next) => {
    if (req.params.userId === "1") {
      res.send(jsonOne);
    } else if (req.params.userId === "2") {
      res.send(jsonTwo);
    } else if (req.params.userId === "3") {
      res.send(jsonThree);
    } else {
      res.status(500).send("User Not Found");
    }
  },
};
