# Use the official PostgreSQL image as a base
FROM postgres:13

# Copy the initialization script to the container
COPY init.sql /docker-entrypoint-initdb.d/
