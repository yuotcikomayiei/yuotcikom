const express = require('express');
const router = express.Router();
const { getResume, upsertResume } = require('../controllers/resumeController');

// Resume routes
router.get('/', getResume);
router.post('/', upsertResume);
router.put('/', upsertResume);

module.exports = router;
