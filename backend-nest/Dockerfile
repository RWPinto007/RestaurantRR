# Use Node.js LTS version
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the NestJS project
RUN npm run build

# Expose the port NestJS runs on (default 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
