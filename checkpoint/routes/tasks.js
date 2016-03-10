'use strict'
const express     = require('express');
const tasks       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp');

var myTasks = {taskA:{
      name   : 'Jason',
      completed : true,    
      desc   : "blurgTest"
      }
  };

// localhost:3000/tasks
tasks.route('/')
  .get(db.getTasks, (req,res)=>res.send(res.rows))
  .post(db.addTask, (req,res)=>res.send(res.rows))

// localhost:3000/task-#####/time
tasks.route('/:id/time')
  .put(db.updateTime, (req,res)=>{
    // update task time, if it exists
    // TODO: return actual task_id from db
    res.send(req.params.taskid)
  })

// localhost:3000/task-#####
tasks.route('/:id')
  .put(db.toggleTask, (req,res)=>{
    // update specific task
    // TODO: return actual task_id from db
    res.send(req.params.taskid)
  })
  .delete(db.deleteTask, (req,res)=>{
    // delete specific task
    // TODO: return actual task_id from db
    res.send(req.params.taskid)
  })


module.exports = tasks;