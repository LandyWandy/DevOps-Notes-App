docker build -t tasks-dev-frontend .
docker run --name tasks-dev-frontend -d -p 3000:80 tasks-dev-frontend
