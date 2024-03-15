const express = require('express');
//import middleware -- valdar
const validar = require('../MIDDLEWARES/middleware_tiempo');

const router = express.Router();

router.get("/", (req, res) => res.send("Hello World"));
router.get("/about", (req, res) => res.send("About page"));
router.get("/contacto", (req, res) => res.send("Contactanos"));
router.get("/xd", (req, res) => res.json({ message: "pimpimpim" }));
router.get("/tiempo", validar, (req, res) => res.send("te felicito, que bien actuas"));

module.exports = router