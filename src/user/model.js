const mongoose = require("mongoose");
const validator = require("validator");
 
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please provide a first name"],
      // trim: true,
      // minLength: [3, "Name must be at least 3 characters."],
      // maxLength: [100, "Name is too large"],
    },
    email: {
      type: String,
      // validate: [validator.isEmail, "Provide a valid Email"],
      // trim: true,
      // lowercase: true,
      // unique: true,
      // required: [true, "Email address is required"],
    },
    password: { 
      type: String,
      // required: [true, "Password is required"],
      // minLength:6
    },
    confirmPassword: {
      type: String,
      // required: [true, "Please confirm your password"],
      // validate: {
      //   validator: function (value) {
      //     return value === this.password;
      //   },
      //   message: "Passwords don't match!",
      // },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
 
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    //  only run if password is modified, otherwise it will change every time we save the user!
    return next();
  }
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

 
const User = mongoose.model("User", userSchema);

module.exports = User;