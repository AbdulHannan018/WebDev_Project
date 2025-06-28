const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Notes API' });
});

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/notes-app';
console.log(`MongoDB URI: ${mongoURI}`);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.log('Starting server without MongoDB connection...');
  });

// Authentication Routes
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save user to database (pseudo code)
  // const user = new User({ email, password: hashedPassword });
  // await user.save();
  res.status(201).json({ message: 'User created' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  // Find user in database (pseudo code)
  // const user = await User.findOne({ email });
  // if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Routes
app.use('/api/notes', require('./routes/notes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));