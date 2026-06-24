import React, { useState, useEffect } from 'react';
import { skillAPI } from '../services/api';
import '../styles/Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillAPI.getAllSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <div className="container mt-5">Loading skills...</div>;

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return 'success';
      case 'Advanced':
        return 'info';
      case 'Intermediate':
        return 'warning';
      case 'Beginner':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="skills-page">
      <div className="container py-5">
        <h1 className="mb-5">Skills & Expertise</h1>
        <div className="row">
          {skills.map((skillCategory) => (
            <div className="col-md-4 mb-4" key={skillCategory._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">{skillCategory.category}</h5>
                  <div className="skills-list">
                    {skillCategory.skills &&
                      skillCategory.skills.map((skill, idx) => (
                        <div key={idx} className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span>{skill.name}</span>
                            <small className="text-muted">
                              {skill.proficiency}
                            </small>
                          </div>
                          <div className="progress">
                            <div
                              className={`progress-bar bg-${getProficiencyColor(
                                skill.proficiency
                              )}`}
                              style={{
                                width:
                                  skill.proficiency === 'Expert'
                                    ? '100%'
                                    : skill.proficiency === 'Advanced'
                                    ? '85%'
                                    : skill.proficiency === 'Intermediate'
                                    ? '65%'
                                    : '40%',
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
