# Yuot Cikom - Personal Portfolio Website

This is a personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Home Page**: Bio and profile introduction
- **Projects**: Showcase of personal and professional projects
- **Skills**: Display of technical skills organized by category
- **Resume**: Education, experience, and certifications
- **Blog**: Simple blog system where users can share experiences
- **Contact**: Contact form for visitors to reach out

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Bootstrap** - CSS framework

## Project Structure

```
yuotcikom/
├── backend/
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── controllers/         # Route controllers
│   ├── config/              # Configuration files
│   ├── middleware/          # Custom middleware
│   ├── .env                 # Environment variables
│   ├── server.js            # Entry point
│   ├── seed.js              # Database seeding script
│   └── package.json         # Dependencies
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS files
│   │   └── App.js           # Main component
│   └── package.json         # Dependencies
├── docker-compose.yml       # Docker configuration
└── README.md                # This file
```

## Installation & Setup

### Option 1: Local Setup (without Docker)

#### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yuotcikom-portfolio
NODE_ENV=development
```

4. Seed the database with sample data:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

### Option 2: Docker Setup

#### Prerequisites
- Docker
- Docker Compose

#### Steps

1. Make sure you're in the project root directory

2. Build and start all services:
```bash
docker-compose up --build
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 3000

3. Seed the database (optional, for sample data):
```bash
docker exec yuotcikom-backend npm run seed
```

## API Endpoints

### Blog Posts
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get a specific blog post
- `POST /api/blog` - Create a new blog post
- `PUT /api/blog/:id` - Update a blog post
- `DELETE /api/blog/:id` - Delete a blog post

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a specific skill category
- `POST /api/skills` - Create a new skill category
- `PUT /api/skills/:id` - Update a skill category
- `DELETE /api/skills/:id` - Delete a skill category

### Resume
- `GET /api/resume` - Get resume data
- `POST /api/resume` - Create or update resume

### Contact
- `GET /api/contact` - Get all contact messages
- `GET /api/contact/:id` - Get a specific message
- `POST /api/contact` - Submit a contact form
- `PUT /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete a message

## Available Scripts

### Backend

```bash
npm start       # Start the server
npm run seed    # Seed database with sample data
npm test        # Run tests (if configured)
```

### Frontend

```bash
npm start       # Start development server
npm build       # Build for production
npm test        # Run tests
npm eject       # Eject from Create React App (not reversible)
```

## Customization

### Updating Content

All content can be easily edited through:

1. **Blog Posts** - Use the API or update in MongoDB
2. **Projects** - Modify project details in the database
3. **Skills** - Update skill categories and proficiency levels
4. **Resume** - Edit experience, education, and certifications
5. **Contact** - View submitted messages in the database

### Styling

All component styles are in `frontend/src/styles/`. You can customize:
- Colors and themes
- Layouts and spacing
- Responsive design
- Animations and transitions

## Database Seeding

Run the seed script to populate the database with sample data:

```bash
cd backend
npm run seed
```

This creates sample:
- Blog posts
- Projects
- Skills
- Resume information

## Deployment

### Deploy to Production

For deploying to production:

1. Update `.env` files with production credentials
2. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
3. Deploy backend and frontend separately or use Docker
4. Update MongoDB to a production instance (e.g., MongoDB Atlas)

## Troubleshooting

### Backend Connection Issues
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- Verify port 5000 is not in use

### Frontend Connection Issues
- Ensure backend is running on port 5000
- Check API URLs in `frontend/src/services/api.js`
- Verify CORS is enabled on backend

### Docker Issues
- Run `docker-compose down` to stop services
- Run `docker-compose up --build` to rebuild
- Check logs: `docker-compose logs <service-name>`

## Future Enhancements

- Admin panel for content management
- Authentication and authorization
- Image upload functionality
- Comments on blog posts
- Search functionality
- SEO optimization
- Email notifications

## License

This project is open source and available under the MIT License.

## Author

Yuot Cikom

---

For questions or support, please contact through the portfolio contact page.
