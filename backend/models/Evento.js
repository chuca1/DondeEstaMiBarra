const { Schema, model } = require("mongoose");

const eventoSchema = new Schema(
  {
    equipo: String,
    rival: String,
    fecha: String,
    lugar: String,
    lat: {
      type: Number,
      default: 0
    },
    lng: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Evento", eventoSchema);
