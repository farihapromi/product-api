require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  console.log('Connecting to MongoDB...');
  try {
    await mongoose.connect(config.db.MONGO_URI, {
      dbName: config.db.MONGO_DB_NAME,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error(`❌ Connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
