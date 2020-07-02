var express = require('express');
var router = express.Router();
var models = require('../api/models/');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll().then(function(todos) {
    res.json(todos)
  })
});

// router.get('/:id', function(req, res, next) {
//   models.Todo.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(todos) {
//     res.json(todos)
//   })
// });

router.post('/', function(req, res, next) {
  models.Todo.create({
    title: req.body.title
  })
  .then(function(todo) {
    res.json(todo)
  })
});

router.put('/:id', function(req, res, next) {
  models.Todo.update({
    title: req.body.title,
    complete: req.body.complete
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(todo) {
    res.send(todo)
  })
});

router.delete('/:id', function(req, res, next) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(todo) {
    res.json(todo)
  })
});


module.exports = router;
