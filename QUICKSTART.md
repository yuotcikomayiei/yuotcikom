# Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Quick Start (Local Development)

### 1. Install Dependencies

#### Option A: Automatic Setup (Linux/Mac)
```bash
chmod +x setup.sh
./setup.sh
```

#### Option B: Manual Setup
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 2. Configure Environment

Create `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio
NODE_ENV=development
```

### 3. Start MongoDB

```bash
mongod
```

### 4. Seed Database (Optional)

In a new terminal:
```bash
cd backend
npm run seed
```

### 5. Start Backend Server

In a new terminal:
```bash
cd backend
npm start
```

Backend will run at: http://localhost:5000

### 6. Start Frontend Server

In another new terminal:
```bash
cd frontend
npm start
```

Frontend will open at: http://localhost:3000

## Using Docker

If you prefer using Docker:

```bash
docker-compose up --build
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 3000

## Access the Application

Open your browser and go to: **http://localhost:3000**

## Navigation

- **Home**: View profile and bio
- **Projects**: Browse your projects
- **Skills**: Check your technical skills
- **Resume**: View education, experience, and certifications
- **Blog**: Read blog posts
- **Contact**: Send messages

## API Endpoints (for reference)

All API endpoints are available at `http://localhost:5000/api/`

- `/blog` - Blog posts
- `/projects` - Projects
- `/skills` - Skills
- `/resume` - Resume information
- `/contact` - Contact messages

## Customizing Content

All content is stored in MongoDB and can be modified through:

1. API calls using tools like Postman
2. Directly modifying the database using MongoDB Compass
3. Running the seed script and modifying the data

## Stopping Services

### Local Development
Use Ctrl+C in each terminal

### Docker
```bash
docker-compose down
```

## Troubleshooting

**Backend won't start:**
- Make sure MongoDB is running
- Check if port 5000 is available
- Verify .env file exists with correct MONGODB_URI

**Frontend won't compile:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Can't connect to MongoDB:**
- Ensure MongoDB is running: `mongod`
- Check connection string in .env

**Port already in use:**
- Change PORT in .env file
- Or stop the service using that port

## Next Steps

1. Customize the portfolio content
2. Add your own projects and skills
3. Update the bio and resume information
4. Write blog posts
5. Deploy to a production server

For more details, see the main [README.md](../README.md)
