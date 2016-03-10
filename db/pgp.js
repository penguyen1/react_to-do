'use strict'
var pgp = require('pg-promise')({});
var env = require('dotenv');
var cn  = {
  host: 'localhost',
  port: 5432,
  database: 'todo_stopwatch',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}
var db  = pgp(cn);

function addTask(req,res,next){
  db.one(`INSERT INTO tasks(task_name, task_desc) VALUES($1,$2) RETURNING task_id;`,
          [req.body.task_name, req.body.task_desc])
    .then((data)=>{
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log('ERROR in ADDING TASK!', error);
    })
}

function getTasks(req,res,next){
  db.any(`SELECT * FROM tasks;`)
    .then((data)=>{
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log('ERROR in GETTING TASKS', error);
    })
}

function toggleTask(req,res,next){
  db.none(`UPDATE tasks SET completed=NOT completed WHERE task_id=($1) RETURNING task_id;`,
          [req.params.taskid])
    .then((data)=>{
      console.log('TASK UPDATE SUCCESS!');
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log('ERROR in UPDATING TASK', error);
    })
}

function updateTime(req,res,next){
  db.none(`UPDATE tasks SET task_time_start=($1), task_time_end=($2) WHERE task_id=($3) RETURNING task_id;`,
          [req.body.start_time, req.body.end_time, req.params.taskid])
    .then((data)=>{
      console.log('TASK START TIME UPDATE!');
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log('ERROR in UPDATING START TASK TIME', error);
    })
}

// function updateStartTime(req,res,next){
//   db.none(`UPDATE tasks SET task_time_start=($1) WHERE task_id=($2) RETURNING task_id;`,
//           [req.body.start_time, req.params.taskid])
//     .then((data)=>{
//       console.log('TASK START TIME UPDATE!');
//       res.rows = data;
//       next();
//     })
//     .catch((error)=>{
//       console.log('ERROR in UPDATING START TASK TIME', error);
//     })
// }

// function updateEndTime(req,res,next){
//   db.none(`UPDATE tasks SET task_time_end=($1) WHERE task_id=($2) RETURNING task_id;`,
//           [req.body.end_time, req.params.taskid])
//     .then((data)=>{
//       console.log('TASK END TIME UPDATE!');
//       res.rows = data;
//       next();
//     })
//     .catch((error)=>{
//       console.log('ERROR in UPDATING END TASK TIME', error);
//     })
// }

function deleteTask(req,res,next){
  db.none(`DELETE FROM tasks WHERE task_id=($1) RETURNING task_id;`, [req.params.taskid])
    .then((data)=>{
      console.log('TASK DELETE SUCCESS!');
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log('ERROR in DELETING TASK', error);
    })
}


module.exports.addTask = addTask;
module.exports.getTasks = getTasks;
module.exports.toggleTask = toggleTask;
module.exports.updateTime = updateTime;
// module.exports.updateStartTime = updateStartTime;
// module.exports.updateEndTime = updateEndTime;
module.exports.deleteTask = deleteTask;





