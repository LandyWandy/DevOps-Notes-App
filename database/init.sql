CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) NOT NULL
);