const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    skills: [
      {
        name: String,
        proficiency: {
          type: String,
          enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
