#!/bin/bash

echo "Starting Yuot Cikom Portfolio Website Setup..."
echo ""

# Check if MongoDB is running
echo "Checking MongoDB..."
if ! command -v mongod &> /dev/null; then
    echo "MongoDB is not installed. Please install MongoDB first."
    echo "Visit: https://docs.mongodb.com/manual/installation/"
    exit 1
fi

# Check if Node.js is installed
echo "Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Setup backend
echo "Setting up backend..."
cd backend
npm install
echo "✓ Backend dependencies installed"

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "PORT=5000" > .env
    echo "MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio" >> .env
    echo "NODE_ENV=development" >> .env
    echo "✓ Created .env file"
fi

cd ..

# Setup frontend
echo ""
echo "Setting up frontend..."
cd frontend
npm install
echo "✓ Frontend dependencies installed"

cd ..

echo ""
echo "✓ Setup complete!"
echo ""
echo "To start the application:"
echo ""
echo "1. Start MongoDB (in a separate terminal):"
echo "   mongod"
echo ""
echo "2. Start the backend server (in another terminal):"
echo "   cd backend && npm start"
echo ""
echo "3. Start the frontend server (in another terminal):"
echo "   cd frontend && npm start"
echo ""
echo "4. Seed database with sample data (optional):"
echo "   cd backend && npm run seed"
echo ""
echo "Access the application at: http://localhost:3000"
