import React, { useState, useEffect } from 'react';
import { resumeAPI } from '../services/api';
import '../styles/Resume.css';

function Resume() {
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

  if (loading) return <div className="container mt-5">Loading resume...</div>;
  if (!resume) return <div className="container mt-5">No resume found</div>;

  return (
    <div className="resume-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            {/* Experience Section */}
            <section className="mb-5">
              <h2 className="border-bottom pb-3 mb-4">Experience</h2>
              {resume.experience && resume.experience.length > 0 ? (
                resume.experience.map((exp, idx) => (
                  <div key={idx} className="mb-4">
                    <h5>{exp.position}</h5>
                    <p className="text-muted">
                      {exp.company} | {exp.startDate} to {exp.endDate}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))
              ) : (
                <p>No experience data available</p>
              )}
            </section>

            {/* Education Section */}
            <section className="mb-5">
              <h2 className="border-bottom pb-3 mb-4">Education</h2>
              {resume.education && resume.education.length > 0 ? (
                resume.education.map((edu, idx) => (
                  <div key={idx} className="mb-4">
                    <h5>{edu.degree} in {edu.field}</h5>
                    <p className="text-muted">
                      {edu.institution} - Graduated {edu.graduationYear}
                    </p>
                  </div>
                ))
              ) : (
                <p>No education data available</p>
              )}
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="border-bottom pb-3 mb-4">Certifications</h2>
              {resume.certifications && resume.certifications.length > 0 ? (
                <div className="row">
                  {resume.certifications.map((cert, idx) => (
                    <div key={idx} className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">{cert.name}</h6>
                          <p className="card-text text-muted">
                            {cert.issuer}
                          </p>
                          <small>{cert.date}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No certifications available</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p>{resume.bio || 'No bio available'}</p>
                <button className="btn btn-primary w-100">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
