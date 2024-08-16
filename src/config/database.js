const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://subairasam8733260:wQ9IrKvm0F6XBPn4@cluster0.cwfwse6.mongodb.net/taxpay?retryWrites=true&w=majority'; // Replace 'yourDatabaseName' with your actual database name

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
    
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
