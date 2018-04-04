var express = require('express');
var app = express();
var faker = require('faker');
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'join_us'
});




app.get('/', function(req, res) {
  var q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, function(err, result) {
    if (err) throw err;
    var count = result[0].count
    // res.send('The count is ' + count);
    res.render('home', {data: count});
  });
});

app.post('/register', function(req, res) {
  var email = req.body.email;
  
});

app.get('/joke', function(req, res) {
  var joke = "You...";
  res.send(joke);
});

app.get('/random_num', function(req, res) {
  var ran = Math.floor(Math.random() * 100);
  res.send('Random number ' + ran);
});

app.listen(8889, function() {
  console.log('Server running on 3306!');
});