CREATE SCHEMA myschema;

CREATE TABLE myschema.user (
  "name" varchar NOT NULL,
  id varchar NOT NULL PRIMARY KEY,
  phone_number varchar(15) NOT NULL,
  user_type varchar not null
);

CREATE TABLE myschema.opening (
  user_coach_id varchar,
  time timestamp with time zone NOT NULL,
  CONSTRAINT fk_opening_user FOREIGN KEY (user_coach_id) REFERENCES myschema.user(id),
  UNIQUE (user_coach_id, time)
);

CREATE TABLE myschema.call (
  id int PRIMARY KEY,
  user_coach_id varchar NOT NULL,
  user_student_id varchar NOT NULL,
  score INT,
  notes varchar,
  time timestamp with time zone NOT NULL,
  FOREIGN KEY (user_coach_id) REFERENCES myschema.user(id)
);

INSERT INTO myschema.user VALUES ('Alice Coach', '1', '7789991111', 'coach');
INSERT INTO myschema.user VALUES ('Bob Coach', '2', '7789992222', 'coach');
INSERT INTO myschema.user VALUES ('Carol Student', '3', '7789993333', 'student');
INSERT INTO myschema.user VALUES ('David Student', '4', '7789994444', 'student');


