const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt fields
  }
);

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
