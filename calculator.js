const express = require("express");
const bodyParser = require("body-parser");  //body-parser package is used to fectch the data that user enters

const app = express();
app.use(bodyParser.urlencoded({extended: true}));    //This is a neccessary or compulsory line to be added while fetching the form data

//GET and POST for add calculator
app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req, res){        // our route or location from where we fetch data is home route or simply "/"

    console.log(req.body);      //For fetching the data entered by the user in all body inputs inside our running server terminal (not compulsory to do so)
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2; 

    res.send("Your result is: "+ result);
});

//GET and POST for BMI calculator
app.get("/bmicalculator", function(req, res){                      
    res.sendFile(__dirname+ "/bmiCalculator.html");          
});

app.post("/bmicalculator", function(req, res){      // our route or location from where we fetch data is new bmi calculator page route or simply "/bmicalculator"         
    var height = Number(req.body.height);         //Fetching height from html body of bmiCalculator
    var weight = Number(req.body.weight);         //Fetching weight from html body of bmiCalculator

    var result = (weight/(height*height))*10000;     //result as per formula of BMI i.e (weight/(height)^2)*10000

    res.send("Your BMI is: " + result);
})

app.listen(3000, function(){
    console.log("Hello");
});

//BMI calculator challenge steps
/*
    We're going to turn the previous BMI calculator code we wrote into a real website using what we've learnt in this module. Follow the steps below to complete the challenge:

1. Create a new file called bmiCalculator.html inside the Calculator folder from the last challenge 

2. Add the HTML boilerplate and set the page title to BMI Calculator

3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 

4. Add a button which says “Caculate BMI”

5. Add the get and post methods for the /bmicalculator route into the same server.js file we've been using

6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.

6. Add an h1 that says BMI Calculator

7. Inside server.js , create 2 variables, one for weight and one for height. 

8. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.
*/