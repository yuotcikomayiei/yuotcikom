import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Blog API
export const blogAPI = {
  getAllPosts: () => api.get('/blog'),
  getPost: (id) => api.get(`/blog/${id}`),
  createPost: (data) => api.post('/blog', data),
  updatePost: (id, data) => api.put(`/blog/${id}`, data),
  deletePost: (id) => api.delete(`/blog/${id}`),
};

// Project API
export const projectAPI = {
  getAllProjects: () => api.get('/projects'),
  getProject: (id) => api.get(`/projects/${id}`),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

// Skill API
export const skillAPI = {
  getAllSkills: () => api.get('/skills'),
  getSkill: (id) => api.get(`/skills/${id}`),
  createSkill: (data) => api.post('/skills', data),
  updateSkill: (id, data) => api.put(`/skills/${id}`, data),
  deleteSkill: (id) => api.delete(`/skills/${id}`),
};

// Resume API
export const resumeAPI = {
  getResume: () => api.get('/resume'),
  upsertResume: (data) => api.post('/resume', data),
};

// Contact API
export const contactAPI = {
  getAllMessages: () => api.get('/contact'),
  getMessage: (id) => api.get(`/contact/${id}`),
  createMessage: (data) => api.post('/contact', data),
  markAsRead: (id) => api.put(`/contact/${id}/read`),
  deleteMessage: (id) => api.delete(`/contact/${id}`),
};

export default api;
