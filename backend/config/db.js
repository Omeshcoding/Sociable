const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Database`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectToDB;
