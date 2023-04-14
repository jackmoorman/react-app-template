const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    newUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DBName',
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) => console.error(err));

const userSchema = new Schema({
  name: String,
  email: String,
});

const User = model('User', userSchema);

module.exports = User;
