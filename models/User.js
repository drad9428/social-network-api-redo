const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'You need to provide a user name!',
    trim: true
  },
  email: {
    type: String,
    required: 'You need to provide an email address!',
    unique: true,
    match: [/.+@.+\..+/]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;