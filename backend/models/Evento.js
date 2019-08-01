const { Schema, model } = require("mongoose");

const eventoSchema = new Schema(
  {
    equipo: String,
    rival: String,
    fecha: String,
    lugar: String,
    lat: Number,
    lng: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Evento", eventoSchema);
