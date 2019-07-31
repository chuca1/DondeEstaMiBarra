const express = require("express");
const router = express.Router();
const {
  getEquiposPorLiga,
  getOneEquipo
} = require("../controllers/equipos.controllers");
const {
  createNewEvento,
  getAllEventos
} = require("../controllers/eventos.controllers");
const {
  createNewPublicacion,
  findAllTeamPost
} = require("../controllers/publicacion.controllers");
/* GET home page */
router.get("/:liga", getEquiposPorLiga);
router.get("/:liga/:id", getOneEquipo);
router.post("/:liga/:id/post", createNewPublicacion);
router.post("/:liga/:id/evento", createNewEvento);
router.get("/:liga/:id/post", findAllTeamPost);
router.get("/:liga/:id/evento", getAllEventos);
module.exports = router;
