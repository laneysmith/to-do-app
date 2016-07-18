var express = require('express');
var router = express.Router();
var db = require('../db/api');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getTasks().then(function(data) {
    res.render('index', {tasks: data});
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  db.addTask(req.body).then(function(data) {
    res.redirect('/');
  });
});

router.get('/edit/:id/', function(req, res, next) {
  db.completeTask(req.params.id).then(function(data) {
    res.redirect('/');
  });
});

module.exports = router;
