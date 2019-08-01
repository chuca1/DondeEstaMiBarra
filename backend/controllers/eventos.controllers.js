const Evento = require("../models/Evento");
const Equipo = require("../models/Equipo");

exports.createNewEvento = (req, res, next) => {
  const { id } = req.params;
  Evento.create({ ...req.body })
    .then(evento => {
      Equipo.findByIdAndUpdate(
        id,
        { $push: { eventos: evento.id } },
        { new: true, upsert: true },
        function(err, managerparent) {
          if (err) res.status(500).json({ err });
        }
      );
      res.status(200).json("Evento creado");
    })
    .catch(err => res.status(500).json({ err }));
};

exports.findAllTeamEvents = (req, res, next) => {
  const { id } = req.params;
  Equipo.findById(id)

    .then(equipo => {
      let eventss = [];

      equipo.eventos.map(evento => {
        const id = evento;
        Event.findById(id).then(event => {
          eventss.push(event);
          if (eventss.length == equipo.eventos.length) {
            res.status(201).json({ eventss });
          }
        });
      });
    })
    .catch();
};
exports.findAllEventsVs = (req, res, next) => {
  const { id, rival } = req.params;

  Equipo.findById(id)
    .then(equipo => {
      let eventss = [];
      let eventosQ = [];
      console.log("fs,ffa", equipo.eventos);
      if (equipo.eventos.length > 0) {
        equipo.eventos.map(evento => {
          eventss.push(evento);
          Equipo.findById({ id: rival })
            .then(equipo => {
              if (equipo.name == evento.rival) {
                eventosQ.push(evento);
              }
            })
            .catch(err => console.log(err));
          if (eventss.length == equipo.eventos.length) {
            res.status(201).json({ eventosQ });
          }
        });
      }
      let evnetss = [];
      res.status(201).json({ evnetss });
    })
    .catch(err => console.log(err));
};
