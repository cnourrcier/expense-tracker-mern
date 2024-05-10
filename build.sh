#!/bin/bash

# Install backend dependencies
npm install

# Navigate to the client directory
cd client

# Install dependencies
npm install

# Build the client
npm run build

# Navigate back to the root directory
cd ..
