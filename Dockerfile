FROM node:18-alpine

WORKDIR /app

# Copy only package.json and lock files to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Save this image for reuse

