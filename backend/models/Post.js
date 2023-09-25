const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema({
  title: String,
  image: String,
  caption: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//Export the model
module.exports = mongoose.model('Post', postSchema);
