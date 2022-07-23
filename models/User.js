const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [thoughtsSchema],
    friends: [userSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema.virtual('friendCount')
.get(function(){
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
