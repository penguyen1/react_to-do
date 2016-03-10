DROP TABLE if exists tasks CASCADE;

CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY UNIQUE,
  task_name VARCHAR(255),
  task_desc VARCHAR(255),
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  task_time_start TIMESTAMP,
  task_time_end TIMESTAMP,
  task_time_created TIMESTAMP NOT NULL DEFAULT now()
);