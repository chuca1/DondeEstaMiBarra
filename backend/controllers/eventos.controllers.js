const Evento = require("../models/Evento");
const Equipo = require("../models/Equipo");

exports.createNewEvento = (req, res, next) => {
  const { id } = req.params;
  Evento.create({ ...req.body })
    .then(evento => {
      Equipo.findByIdAndUpdate(
        id,
        { $push: { evnetos: evento.id } },
        { new: true, upsert: true },
        function(err, managerparent) {
          if (err) res.status(500).json({ err });
        }
      );
      res.status(200).json("Evento creado");
    })
    .catch(err => res.status(500).json({ err }));
};
exports.getAllEventos = (req, res, next) => {
  Evento.find()
    .then(eventos => res.status(201).json(eventos))
    .err(err => res.status(500).json({ err }));
};
