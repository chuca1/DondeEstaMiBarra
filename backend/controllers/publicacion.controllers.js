const Publicacion = require("../models/Publicacion");
const User = require("../models/User");
const Equipo = require("../models/Equipo");
exports.createNewPublicacion = (req, res, next) => {
  const { id } = req.params;
  Publicacion.create({ ...req.body })
    .then(publicacion => {
      Equipo.findByIdAndUpdate(
        id,
        { $push: { publicaciones: publicacion.id } },
        { new: true }
      ).then(equipo => {});

      res.status(200).json({ publicacion });
    })
    .catch(err => res.status(500).json({ err }));
};
exports.findAllTeamPost = (req, res, next) => {
  const { id } = req.params;
  Equipo.findById(id)

    .then(equipo => {
      let publicacioness = [];

      equipo.publicaciones.map(publicacion => {
        const id = publicacion;
        Publicacion.findById(id).then(publi => {
          publicacioness.push(publi);
          if (publicacioness.length == equipo.publicaciones.length) {
            res.status(201).json({ publicacioness });
          }
        });
      });
    })
    .catch();
};
