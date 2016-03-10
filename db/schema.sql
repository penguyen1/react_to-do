DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  task_id  serial unique primary key,
  task_name VARCHAR(50),
  task_desc TEXT,
  completed boolean not null default false,
  task_time_start timestamp,
  task_time_end timestamp,
  task_created timestamp not null default now()
);