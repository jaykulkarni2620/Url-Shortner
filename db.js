const mongoose = require('mongoose');

async function connectToMongoDb(url) {
 try {
    await mongoose.connect(url);
    console.log(`Connected to ${url}...`);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error; // Rethrow the error to indicate that the connection failed
  }
};

module.exports = connectToMongoDb;