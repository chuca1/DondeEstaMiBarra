const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: String,
    role: {
      type: String,
      enum: ["USER", "MASTERMIND"],
      default: "USER"
    },
    team: String,
    publicaciones: Array,
    eventos: Array
  },
  {
    timestamps: true,
    versionKey: false
  }
);
userSchema.plugin(PLM, { usernameField: "email" });
module.exports = model("User", userSchema);
