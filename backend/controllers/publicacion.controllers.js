const Publicacion = require("../models/Publicacion");
const User = require("../models/User");
const Equipo = require("../models/Equipo");
exports.createNewPublicacion = (req, res, next) => {
  const { id } = req.params;
  Publicacion.create({ ...req.body })
    .then(publicacion => {
      Equipo.findByIdAndUpdate(
        id,
        { $push: { publicacion: publicacion.id } },
        { new: true, upsert: true },
        function(err, managerparent) {
          if (err) res.status(500).json({ err });
        }
      );
      res.status(200).json("Publicacion creada");
    })
    .catch(err => res.status(500).json({ err }));
};
