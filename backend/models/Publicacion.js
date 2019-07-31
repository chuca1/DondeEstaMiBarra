const { Schema, model } = require("mongoose");

const publicacionSchema = new Schema(
  {
    usuario: String,
    contenido: String,
    foto: String,
    equipo: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Publicacion", publicacionSchema);
