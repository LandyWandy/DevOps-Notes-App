docker build -t landywandy/notes-app-frontend:latest --build-arg REACT_APP_API_URL=http://localhost:5000 .
docker run --name tasks-dev-frontend -d -p 3000:80 tasks-dev-frontend
