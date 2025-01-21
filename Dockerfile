# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# # Create a non-root user
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# # Change ownership of the app directory to the non-root user
# RUN chown -R nextjs:nodejs /app

# # Switch to the non-root user
# USER nextjs


# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]

# Let's add a simple script to test our Dockerfile
console.log("Dockerfile created successfully!");
console.log("To build the Docker image, run:");
console.log("docker build -t nextjs-blog .");
console.log("To run the container locally, use:");
console.log("docker run -p 3000:3000 nextjs-blog");
