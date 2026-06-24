import React, { useState, useEffect } from 'react';
import { resumeAPI } from '../services/api';
import '../styles/Home.css';

function Home() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await resumeAPI.getResume();
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  if (loading) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">I'm Yuot Cikom, a Full-Stack Developer</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section py-5">
        <div className="container">
          <h2 className="mb-4">About Me</h2>
          {resume && resume.bio && (
            <p className="lead">{resume.bio}</p>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h3>Projects</h3>
              <p className="display-6">10+</p>
            </div>
            <div className="col-md-4">
              <h3>Experience</h3>
              <p className="display-6">5+ Years</p>
            </div>
            <div className="col-md-4">
              <h3>Skills</h3>
              <p className="display-6">15+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
