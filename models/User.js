const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
    friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);
// access the friend array to get the number of friends
userSchema.virtual('friendCount')
.get(function(){
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
