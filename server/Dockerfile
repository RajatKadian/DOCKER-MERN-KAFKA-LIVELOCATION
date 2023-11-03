# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies using npm
RUN npm install

# Copy the rest of the server code to the container
COPY . .

# Expose the port where the Node.js server will run (default is 8000)
EXPOSE 8081

# Start the Node.js server
CMD ["npm", "start"]
