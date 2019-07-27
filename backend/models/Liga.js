const { Schema, model } = require("mongoose");

const ligaSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    deporte: {
      type: String,
      require: true
    },
    logo: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = model("Liga", ligaSchema);
