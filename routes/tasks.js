const express     = require('express');
const tasks       = express.Router();


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
  })

// localhost:3000/task-#####/time
tasks.route('/:id/time')
  .put((req,res)=>{
    // update task time, if it exists
    // if not, do nothing
  })

// localhost:3000/task-#####
tasks.route('/:id')
  .put((req,res)=>{
    // update specific task
  })
  .delete((req,res)=>{
    // delete specific task
  })


module.exports = tasks;