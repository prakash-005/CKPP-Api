// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error('MongoDB Connection Error:', err));

// // Define Schema and Model
// const QuestionSchema = new mongoose.Schema({
//         name: String,
//         age: Number,
//         email: String,
// });

// const Question = mongoose.model('Question', QuestionSchema);

// // API to get all questions
// app.get('/questionsData', async (req, res) => {
//   try {
//     const questions = await Question.find();
//     res.json(questions);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // API to add a new question
// app.post('/questionsData', async (req, res) => {
//   try {
//     const newQuestion = new Question(req.body);
//     await newQuestion.save();
//     res.json({ message: 'Question added successfully' });
//   } catch (error) {
//     res.status(400).json({ error: 'Bad Request' });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Middleware
app.use(cors());
// app.use(express.json());
 
// MongoDB Atlas connection
const MONGO_URI = process.env.MONGO_URI;
 
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
 
// Define a schema and model
const userSchema = new mongoose.Schema(
);
 
const User = mongoose.model('User', userSchema);
 
// Route to get data from MongoDB
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log(req.rawHeaders,'-------------URL')
    res.json(users);
    // res.json([
    //   { _id: '1', name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    //   { _id: '2', name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    // ]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 