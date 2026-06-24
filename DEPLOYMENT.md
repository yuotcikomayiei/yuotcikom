# Deployment Guide

## Local Development Deployment

### Prerequisites
- Node.js v18+ 
- MongoDB (local or Atlas)
- npm or yarn

### Quick Start

```bash
# Option 1: Using Docker (Recommended)
docker-compose up --build

# Option 2: Manual Setup
# Terminal 1: Start MongoDB
mongod

# Terminal 2: Start Backend
cd backend
npm install
npm run seed    # Optional: seed with sample data
npm start

# Terminal 3: Start Frontend
cd frontend
npm install
npm start
```

### Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- MongoDB: mongodb://localhost:27017

---

## Production Deployment

### Option 1: Heroku

1. Build frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy backend to Heroku:
   ```bash
   heroku create yuotcikom-backend
   heroku config:set MONGODB_URI=your_production_db_uri
   git push heroku main
   ```

3. Deploy frontend to Vercel:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Option 2: AWS

1. Backend: Deploy to EC2/Elastic Beanstalk
2. Frontend: Deploy to S3 + CloudFront
3. Database: Use MongoDB Atlas
4. API Gateway for routing

### Option 3: DigitalOcean

1. Create Droplet with Node.js
2. Deploy using PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js
   ```
3. Use Nginx as reverse proxy
4. Deploy frontend static files

### Option 4: Railway

```bash
railway init
railway up
```

---

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=******cluster.mongodb.net/yuotcikom-portfolio
NODE_ENV=production
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-domain.com/api
```

---

## Database Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update MONGODB_URI

### Option 2: Self-Hosted MongoDB
1. Install MongoDB
2. Configure for production
3. Enable authentication
4. Backup regularly

---

## SSL/HTTPS Setup

### Using Let's Encrypt
```bash
sudo apt-get install certbot
sudo certbot certonly -d yourdomain.com
```

### Nginx Configuration
```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    location /api {
        proxy_pass http://backend:5000;
    }
    
    location / {
        root /var/www/frontend/build;
        try_files $uri /index.html;
    }
}
```

---

## Performance Optimization

### Frontend
```bash
# Build optimization
npm run build

# Serve with gzip compression
npm install -g serve
serve -s build -l 3000 -c cache-control:max-age=86400
```

### Backend
- Use PM2 for clustering
- Enable Redis caching
- Optimize MongoDB queries
- Use CDN for static files

### Database
- Add indexes on frequently queried fields
- Enable connection pooling
- Regular backups
- Monitor query performance

---

## Monitoring & Logging

### Application Monitoring
- Sentry for error tracking
- LogRocket for session replay
- New Relic for performance monitoring

### Server Monitoring
- Uptime monitoring (UptimeRobot)
- Resource monitoring (CPU, Memory)
- Database monitoring (MongoDB Atlas dashboard)

### Log Management
- Consolidate logs to central system
- Monitor error rates
- Set up alerts

---

## Backup Strategy

### Database Backups
```bash
# MongoDB local backup
mongodump --uri="mongodb://localhost:27017/yuotcikom-portfolio"

# Schedule with cron
0 2 * * * /home/user/backup-mongo.sh
```

### File Backups
- GitHub for code
- Automated snapshots for database

---

## CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd backend && npm install && npm run build
      - run: cd frontend && npm install && npm run build
      - run: |
          npm install -g heroku
          heroku login
          heroku git:remote -a your-app
          git push heroku main
```

---

## Troubleshooting Deployment

### Application won't start
- Check environment variables
- Review logs
- Verify dependencies installed
- Check port availability

### Database connection fails
- Verify connection string
- Check firewall rules
- Ensure MongoDB is running
- Verify credentials

### Frontend doesn't load
- Check API URL configuration
- Review CORS settings
- Verify frontend build completed
- Check reverse proxy configuration

### Performance issues
- Profile application
- Check database queries
- Monitor server resources
- Optimize assets

---

## Health Checks

### Backend Health Check
```bash
curl https://your-api.com/api/health
# Response: {"status": "Backend is running"}
```

### Frontend Health Check
```bash
curl https://your-domain.com/
# Should return HTML content
```

---

## Rollback Procedure

### Using Git
```bash
git revert <commit-hash>
git push
```

### Using Docker
```bash
docker-compose down
docker-compose up -d <previous-version>
```

---

## Support & Maintenance

- Regular dependency updates
- Security patches
- Database optimization
- Performance monitoring
- User feedback collection

---

For detailed setup instructions, see [INSTALLATION.md](./INSTALLATION.md)
For quick reference, see [QUICKSTART.md](./QUICKSTART.md)
