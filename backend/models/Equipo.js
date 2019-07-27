const { Schema, model } = require("mongoose");

const equipoSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    logo: {
      type: String,
      require: true
    },
    liga: {
      type: String,
      require: true
    },
    juegos: {
      type: Array,
      require: true
    },
    publicaciones: {
      type: Array,
      default: []
    },
    eventos: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = model("Equipo", equipoSchema);
