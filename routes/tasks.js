'use strict'
const express     = require('express');
const tasks       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp');


// /tasks
tasks.route('/')
  // get all tasks
  .get( db.getTasks, (req,res)=>res.json(res.rows))
  // add a task 
  .post( db.addTask, (req,res)=>res.json(res.rows))

// /tasks/task-12345/time
tasks.route('/:taskID/time')
  // update a task's time, if it exists
  .put( db.updateTime, (req,res)=>{
    res.send(req.params.taskid)
  })

// /tasks/task-12345
tasks.route('/:taskID')
  // update a specific task
  .put( db.toggleTask, (req,res)=>{
    res.send(req.params.taskid)
  })
  // delete a specific task   
  .delete(db.deleteTask, (req,res)=>{
    res.send(req.params.taskid)
  })

module.exports = tasks;