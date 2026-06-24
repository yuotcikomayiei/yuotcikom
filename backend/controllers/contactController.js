const ContactMessage = require('../models/ContactMessage');

// Get all contact messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single contact message
const getMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact message
const createMessage = async (req, res) => {
  const message = new ContactMessage({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark message as read
const markAsRead = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    
    message.read = true;
    const updatedMessage = await message.save();
    res.json(updatedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact message
const deleteMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMessages,
  getMessage,
  createMessage,
  markAsRead,
  deleteMessage,
};
