const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
    },
    experience: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    education: [
      {
        institution: String,
        degree: String,
        field: String,
        graduationYear: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        date: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resume', resumeSchema);
