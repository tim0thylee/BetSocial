const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{type: String}],
  wins: {type: Number},
  loses: {type: Number}
});

userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
userSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
