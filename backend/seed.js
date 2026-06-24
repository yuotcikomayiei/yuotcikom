require('dotenv').config();
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Resume = require('./models/Resume');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yuotcikom-portfolio';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await BlogPost.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Resume.deleteMany({});

    // Seed blog posts
    const blogPosts = [
      {
        title: 'Getting Started with MERN Stack',
        content: 'Learn how to build modern web applications with MongoDB, Express, React, and Node.js. MERN stack is one of the most popular stacks for full-stack development.',
        excerpt: 'Learn how to build modern web applications with MERN stack.',
        tags: ['MERN', 'JavaScript', 'Web Development'],
        featured: true,
      },
      {
        title: 'Best Practices for React Development',
        content: 'Discover the best practices for writing clean, maintainable React code. This includes component composition, state management, and performance optimization.',
        excerpt: 'Discover best practices for writing clean React code.',
        tags: ['React', 'JavaScript', 'Best Practices'],
        featured: true,
      },
      {
        title: 'Database Design Fundamentals',
        content: 'Understand the fundamentals of database design including normalization, relationships, and indexing. Good database design is crucial for application performance.',
        excerpt: 'Understand the fundamentals of database design.',
        tags: ['Database', 'MongoDB', 'Design'],
        featured: false,
      },
    ];

    const createdPosts = await BlogPost.insertMany(blogPosts);
    console.log(`${createdPosts.length} blog posts created`);

    // Seed projects
    const projects = [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform built with MERN stack. Includes product catalog, shopping cart, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://example.com/ecommerce',
        github: 'https://github.com/example/ecommerce',
        featured: true,
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates. Users can create, assign, and track tasks.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        link: 'https://example.com/tasks',
        github: 'https://github.com/example/tasks',
        featured: true,
      },
      {
        title: 'Weather Dashboard',
        description: 'A weather dashboard that displays current weather and forecasts. Integrated with OpenWeather API.',
        technologies: ['React', 'API', 'CSS'],
        link: 'https://example.com/weather',
        github: 'https://github.com/example/weather',
        featured: false,
      },
    ];

    const createdProjects = await Project.insertMany(projects);
    console.log(`${createdProjects.length} projects created`);

    // Seed skills
    const skills = [
      {
        category: 'Frontend',
        skills: [
          { name: 'React', proficiency: 'Expert' },
          { name: 'JavaScript', proficiency: 'Expert' },
          { name: 'HTML/CSS', proficiency: 'Advanced' },
          { name: 'Vue.js', proficiency: 'Intermediate' },
        ],
      },
      {
        category: 'Backend',
        skills: [
          { name: 'Node.js', proficiency: 'Expert' },
          { name: 'Express.js', proficiency: 'Expert' },
          { name: 'MongoDB', proficiency: 'Advanced' },
          { name: 'Python', proficiency: 'Intermediate' },
        ],
      },
      {
        category: 'Tools & Others',
        skills: [
          { name: 'Git', proficiency: 'Advanced' },
          { name: 'Docker', proficiency: 'Intermediate' },
          { name: 'AWS', proficiency: 'Beginner' },
          { name: 'CI/CD', proficiency: 'Intermediate' },
        ],
      },
    ];

    const createdSkills = await Skill.insertMany(skills);
    console.log(`${createdSkills.length} skill categories created`);

    // Seed resume
    const resume = new Resume({
      bio: 'Full-stack developer with 5+ years of experience building web applications. Passionate about clean code and user experience.',
      experience: [
        {
          company: 'Tech Company Inc',
          position: 'Senior Full-Stack Developer',
          startDate: '2021-01',
          endDate: 'Present',
          description: 'Led development of multiple full-stack applications using MERN stack. Mentored junior developers and established coding standards.',
        },
        {
          company: 'StartUp Labs',
          position: 'Full-Stack Developer',
          startDate: '2019-06',
          endDate: '2020-12',
          description: 'Developed and maintained several web applications. Collaborated with product and design teams.',
        },
      ],
      education: [
        {
          institution: 'University of Technology',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          graduationYear: '2019',
        },
      ],
      certifications: [
        {
          name: 'MongoDB Certified Associate Developer',
          issuer: 'MongoDB',
          date: '2021',
        },
        {
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: '2022',
        },
      ],
    });

    await resume.save();
    console.log('Resume data created');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
