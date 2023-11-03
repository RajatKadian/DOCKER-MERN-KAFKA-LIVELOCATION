# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the React app (you can customize this as needed)
RUN yarn build

# Expose the port where the React app will run (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["yarn", "start"]
