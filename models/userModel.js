const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide your username'],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
      trim: true
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

// //  Hash password before saving
// UserSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next(); // Only hash if new or modified
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// //  Add method to compare passwords
// UserSchema.methods.correctPassword = async function(candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

const User = mongoose.model('User', UserSchema);
module.exports = User;
