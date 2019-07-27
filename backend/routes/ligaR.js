const express = require("express");
const router = express.Router();
const {
  getEquiposPorLiga,
  getOneEquipo
} = require("../controllers/equipos.controllers");
const { createNewEvento } = require("../controllers/eventos.controllers");
const {
  createNewPublicacion
} = require("../controllers/publicacion.controllers");
/* GET home page */
router.get("/:liga", getEquiposPorLiga);

router.get("/:liga/:id", getOneEquipo);
router.post("/:liga/:id/post", createNewPublicacion);
router.post("/:liga/:id/evento", createNewEvento);
module.exports = router;
