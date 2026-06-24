# Installation Guide

## System Requirements

- **Node.js** v14+ (recommended v16+)
- **npm** v6+ or **yarn**
- **MongoDB** (either local or cloud-based)

## Installation Methods

### Method 1: Complete Local Setup (Recommended for Development)

#### Step 1: Install Node.js

If you don't have Node.js installed:
1. Visit https://nodejs.org
2. Download the LTS (Long Term Support) version
3. Install and verify:
   ```bash
   node --version
   npm --version
   ```

#### Step 2: Install MongoDB

##### Option A: Local MongoDB Installation

**Windows:**
1. Download from https://www.mongodb.com/try/download/community
2. Run the installer
3. MongoDB will start automatically

**Mac:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

##### Option B: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update MONGODB_URI in backend/.env

#### Step 3: Clone Repository

```bash
cd yuotcikom
```

#### Step 4: Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio
NODE_ENV=development
```

#### Step 5: Setup Frontend

```bash
cd ../frontend
npm install
```

#### Step 6: Run the Application

**Terminal 1 - Start MongoDB:**
```bash
mongod
```

**Terminal 2 - Start Backend:**
```bash
cd backend
npm run seed    # Optional: seed with sample data
npm start
```

Backend will run at: `http://localhost:5000`

**Terminal 3 - Start Frontend:**
```bash
cd frontend
npm start
```

Frontend will open at: `http://localhost:3000`

---

### Method 2: Docker Setup (Recommended for Quick Start)

#### Prerequisites
- **Docker** (https://www.docker.com/products/docker-desktop)
- **Docker Compose** (usually included with Docker Desktop)

#### Steps

1. Verify Docker is installed:
   ```bash
   docker --version
   docker-compose --version
   ```

2. From project root, run:
   ```bash
   docker-compose up --build
   ```

   This starts:
   - MongoDB (port 27017)
   - Backend (port 5000)
   - Frontend (port 3000)

3. Seed database (optional, in a new terminal):
   ```bash
   docker exec yuotcikom-backend npm run seed
   ```

4. Access the application at: `http://localhost:3000`

5. To stop:
   ```bash
   docker-compose down
   ```

---

### Method 3: Hybrid Setup (Docker for DB, Local for Development)

#### Prerequisites
- Node.js
- Docker (for MongoDB only)

#### Steps

1. Start MongoDB in Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

2. Setup Backend:
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio
   NODE_ENV=development
   ```

3. Setup Frontend:
   ```bash
   cd frontend
   npm install
   ```

4. Run Backend:
   ```bash
   cd backend
   npm run seed    # Optional
   npm start
   ```

5. Run Frontend (in new terminal):
   ```bash
   cd frontend
   npm start
   ```

---

## Post-Installation

### 1. Verify Installation

Navigate to `http://localhost:3000` and check:
- [ ] Homepage loads
- [ ] Navigation menu works
- [ ] All pages are accessible
- [ ] Blog section shows sample posts

### 2. Backend Health Check

Visit `http://localhost:5000/api/health` - should return:
```json
{ "status": "Backend is running" }
```

### 3. API Testing (Optional)

Test API endpoints using Postman:

**Get all blog posts:**
```
GET http://localhost:5000/api/blog
```

**Get all projects:**
```
GET http://localhost:5000/api/projects
```

---

## Troubleshooting

### Problem: "MongoDB connection refused"

**Solution:**
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify port 27017 is not blocked

### Problem: "Port 3000 already in use"

**Solution:**
- Kill the process using port 3000
- Or change port in frontend package.json

### Problem: "Port 5000 already in use"

**Solution:**
- Kill the process using port 5000
- Or change PORT in backend/.env

### Problem: "npm install fails"

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: "Docker containers won't start"

**Solution:**
```bash
# Stop all containers
docker-compose down

# Remove volumes
docker-compose down -v

# Rebuild
docker-compose up --build
```

### Problem: "CORS errors in browser console"

**Solution:**
- Ensure backend is running on port 5000
- Check API_URL in frontend/src/services/api.js
- Verify CORS is enabled in backend/server.js

---

## Environment Variables

### Backend (.env)
```
PORT=5000                                           # Backend port
MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio  # Database URL
NODE_ENV=development                               # Environment
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api       # Backend API URL
```

---

## Next Steps

1. **Customize Content:**
   - Edit bio in Resume page
   - Add your projects
   - Update skills
   - Write blog posts

2. **Customize Design:**
   - Update colors in CSS files
   - Modify layouts
   - Add your logo/images

3. **Deploy to Production:**
   - Build frontend: `npm run build`
   - Deploy backend to server/platform
   - Deploy frontend to CDN/hosting
   - Update environment variables

---

## Getting Help

If you encounter issues:

1. Check the [QUICKSTART.md](./QUICKSTART.md) for quick reference
2. Read the main [README.md](./README.md)
3. Check browser console (F12) for errors
4. Check terminal logs for backend errors

---

## Support

For questions or issues, feel free to contact through the portfolio contact page.
