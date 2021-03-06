const express = require("express");
const router = express.Router();
const {
  getEquiposPorLiga,
  getOneEquipo
} = require("../controllers/equipos.controllers");
const {
  createNewEvento,
  findAllEventsVs,
  findEvent,
  AddEventUser
} = require("../controllers/eventos.controllers");
const {
  createNewPublicacion,
  findAllTeamPost,
  findOnePost
} = require("../controllers/publicacion.controllers");
/* GET home page */
router.get("/post/:id", findOnePost);
router.get("/:liga", getEquiposPorLiga);
router.get("/:liga/:id", getOneEquipo);
router.post("/:liga/:id/post", createNewPublicacion);
router.post("/:liga/:id/evento", createNewEvento);
router.get("/:liga/:id/post", findAllTeamPost);
router.get("/:liga/:id/evento/:rival", findAllEventsVs);
router.get("/:liga/:id/evento", findEvent);
router.post("/:liga/:user/evento/:id/add", AddEventUser);
module.exports = router;
