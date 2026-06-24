import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../services/api';
import '../styles/Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogAPI.getAllPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="container mt-5">Loading blog posts...</div>;

  return (
    <div className="blog-page">
      <div className="container py-5">
        <h1 className="mb-5">Blog</h1>
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="col-md-6 mb-4" key={post._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted small">
                      {new Date(post.createdAt).toLocaleDateString()} by{' '}
                      {post.author}
                    </p>
                    <p className="card-text">
                      {post.excerpt || post.content.substring(0, 150)}...
                    </p>
                    <div className="mb-3">
                      {post.tags &&
                        post.tags.map((tag, idx) => (
                          <span key={idx} className="badge bg-info me-2">
                            {tag}
                          </span>
                        ))}
                    </div>
                    <Link
                      to={`/blog/${post._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No blog posts available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
