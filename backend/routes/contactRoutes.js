const express = require('express');
const router = express.Router();
const {
  getAllMessages,
  getMessage,
  createMessage,
  markAsRead,
  deleteMessage,
} = require('../controllers/contactController');

// Contact routes
router.get('/', getAllMessages);
router.get('/:id', getMessage);
router.post('/', createMessage);
router.put('/:id/read', markAsRead);
router.delete('/:id', deleteMessage);

module.exports = router;
