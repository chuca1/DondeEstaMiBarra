const Evento = require("../models/Evento");
const Equipo = require("../models/Equipo");
const User = require("../models/User");
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
      res.status(200).json({ evento });
    })
    .catch(err => res.status(500).json({ err }));
};

exports.findEvent = (req, res, next) => {
  const { id } = req.params;
  Evento.findById(id)

    .then(evento => {
      res.status(201).json({ evento });
    })
    .catch();
};

exports.findAllEventsVs = (req, res, next) => {
  const { id, rival } = req.params;
  console.log(req.params);

  Equipo.findById(id)
    .then(equipo => {
      let eventss = [];
      let eventosQ = [];
      if (equipo.eventos.length > 0) {
        let a = equipo.eventos.length;
        equipo.eventos.map(evento => {
          eventss.push(evento);
          Equipo.findById(rival)
            .then(equipo => {
              Evento.findById(evento).then(evento => {
                a--;
                console.log(a);
                if (equipo.name == evento.rival) {
                  eventosQ.push(evento);
                }

                if (a == 0) {
                  res.status(201).json({ eventosQ });
                }
              });
            })
            .catch(err => console.log(err));
        });
      }
    })
    .catch(err => console.log(err));
};
exports.AddEventUser = (req, res, next) => {
  const { user, id } = req.params;
  User.findByIdAndUpdate(
    user,
    { $push: { eventos: id } },
    { new: true, upsert: true },
    function(err, managerparent) {
      if (err) res.status(500).json({ err });
    },
    res.status(201).json({ user })
  );
};
