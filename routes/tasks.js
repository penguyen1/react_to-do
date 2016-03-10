'use strict'
const express     = require('express');
const tasks       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('./../db/pgp');

var myTasks = {taskA:{
      name   : 'Jason',
      completed : true,    
      desc   : "blurgTest"
      }
  };

// localhost:3000/tasks
tasks.route('/')
  .get((req,res)=>res.json(myTasks))
  .post((req,res)=>{
    // add task to db
    console.log('/tasks post success!')
  })

// localhost:3000/task-#####/time
tasks.route('/:id/time')
  .put((req,res)=>{
    // update task time, if it exists
    // if not, do nothing
    console.log('/:id/time update success!')
  })

// localhost:3000/task-#####
tasks.route('/:id')
  .put((req,res)=>{
    // update specific task
    console.log('/:id update success!')
  })
  .delete((req,res)=>{
    // delete specific task
    console.log('/:id delete success!')
  })


module.exports = tasks;