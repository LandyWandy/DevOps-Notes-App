# Stage 1: Build the React application

# Use an official Node runtime as a parent image
FROM node:latest as build-stage

# Set the working directory in the builder stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and serve the content
CMD ["nginx", "-g", "daemon off;"]
