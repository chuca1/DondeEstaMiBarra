const Equipo = require("../models/Equipo");

exports.getOneEquipo = (req, res, next) => {
  const { id } = req.params;
  Equipo.findById(id)
    .then(equipo => res.status(200).json({ equipo }))
    .catch(err => res.status(500).json({ err }));
};
exports.getEquiposPorLiga = (req, res, next) => {
  const { liga } = req.params;

  Equipo.find({ liga })
    .then(equipos => {
      res.status(200).json({ equipos });
    })
    .catch(err => res.status(500).json({ err }));
};
