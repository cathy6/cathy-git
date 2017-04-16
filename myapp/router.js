var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');

var users = [
  { id:0, name: 'tobi', email: 'tobi@learnboost.com' },
  { id:1, name: 'loki', email: 'loki@learnboost.com' },
  { id:2, name: 'jane', email: 'jane@learnboost.com' }
];


app.use(express.static(path.join(__dirname, '/public')));
app.set("views",__dirname + "/views");
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('demo');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/cathy', function(req, res){
  res.render('introduce', {
    users: users,
    title: "cathy"
  });
});

app.get('/users/:id', function(req, res){
  res.send('id:'+req.params.id);
});

app.listen('3000');
