import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../services/api';
import '../styles/BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await blogAPI.getPost(id);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="container mt-5">Loading post...</div>;
  if (!post) return <div className="container mt-5">Post not found</div>;

  return (
    <div className="blog-detail-page">
      <div className="container py-5">
        <Link to="/blog" className="btn btn-secondary mb-4">
          &larr; Back to Blog
        </Link>
        <article>
          <h1 className="mb-3">{post.title}</h1>
          <div className="post-meta mb-4">
            <small className="text-muted">
              Published on {new Date(post.createdAt).toLocaleDateString()} by{' '}
              {post.author}
            </small>
          </div>
          <div className="mb-4">
            {post.tags &&
              post.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-info me-2">
                  {tag}
                </span>
              ))}
          </div>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogDetail;
