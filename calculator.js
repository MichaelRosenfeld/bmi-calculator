const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log("Server spooled up at port 3000");
});


//Adder

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result is: " + result);
});


//BMI Calculator

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = Math.round(weight / (height/100 * height/100));

  res.send("Your BMI is: " + bmi);
});
