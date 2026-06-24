const express = require('express');
const router = express.Router();
const {
  getAllSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../controllers/skillController');

// Skill routes
router.get('/', getAllSkills);
router.get('/:id', getSkill);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

module.exports = router;
