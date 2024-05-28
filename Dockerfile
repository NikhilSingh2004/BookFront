# Use an official Node runtime as the base image
FROM node:20.11.0-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a smaller Node image for the production environment
FROM node:20.11.0-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/build ./build

# Copy the server file to the working directory
COPY server.js .

# Install production dependencies
COPY package*.json ./
RUN npm install 

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
