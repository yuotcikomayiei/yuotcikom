const BlogPost = require('../models/BlogPost');

// Get all blog posts
const getAllBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single blog post
const getBlogPost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new blog post
const createBlogPost = async (req, res) => {
  const post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    excerpt: req.body.excerpt,
    author: req.body.author || 'Yuot Cikom',
    tags: req.body.tags || [],
    featured: req.body.featured || false,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a blog post
const updateBlogPost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.excerpt) post.excerpt = req.body.excerpt;
    if (req.body.author) post.author = req.body.author;
    if (req.body.tags) post.tags = req.body.tags;
    if (req.body.featured !== undefined) post.featured = req.body.featured;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
