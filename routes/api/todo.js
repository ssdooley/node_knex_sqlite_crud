const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res) {
   db.select().from('todo').then(function(data) {
    res.send(data);
   });
});

router.post('/', function(req, res) {
   db.insert(req.body).into('todo').then(function(data){
      res.send(data);      
   });
});

router.put('/:id', function(req, res) {
   db('todo').where('id', req.params.id).update(req.body).into('todo').then(function(data){
      res.send(data);
   });
})


module.exports = router;