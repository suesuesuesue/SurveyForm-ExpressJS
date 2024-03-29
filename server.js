// Load the express module (Where do you think this comes from?)
var express = require("express");
// require body-parser
// invoke var express and store the resulting application in var app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded());
// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.render('index');
})
// notice that the function is app.get(...) why do you think the function is called get?
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// post route for adding a user
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 res.render('result', {info: req.body});
})

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
