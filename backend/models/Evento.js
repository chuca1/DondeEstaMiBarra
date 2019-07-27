const { Schema, model } = require("mongoose");

const eventoSchema = new Schema(
  {
    equipo: String,
    rival: String,
    fecha: Date,
    lugar: String,
    lat: Number,
    lng: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

moudule.exports = model("Evento", eventoSchema);
