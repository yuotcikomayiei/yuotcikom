const Resume = require('../models/Resume');

// Get resume data
const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update resume
const upsertResume = async (req, res) => {
  try {
    let resume = await Resume.findOne();
    
    if (!resume) {
      resume = new Resume({
        bio: req.body.bio,
        experience: req.body.experience || [],
        education: req.body.education || [],
        certifications: req.body.certifications || [],
      });
    } else {
      if (req.body.bio) resume.bio = req.body.bio;
      if (req.body.experience) resume.experience = req.body.experience;
      if (req.body.education) resume.education = req.body.education;
      if (req.body.certifications) resume.certifications = req.body.certifications;
    }

    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getResume,
  upsertResume,
};
