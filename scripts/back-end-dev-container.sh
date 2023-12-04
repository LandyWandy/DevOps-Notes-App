docker run --name tasks-dev-backend -d -p 5000:5000 -e DB_USER=task_username -e DB_PASSWORD=task_password -e DB_HOST=tasks-dev-database -e DB_PORT=5432 -e DB_DATABASE=tasks_database notes-app-backend
