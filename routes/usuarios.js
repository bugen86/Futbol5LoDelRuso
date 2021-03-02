const router = require("express").Router();

const { all, insertar } = require("../controllers/usuarios");

router.get("/", all);

router.post("/insertar", insertar);

module.exports = router;
