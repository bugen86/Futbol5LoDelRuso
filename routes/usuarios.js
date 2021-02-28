const router = require("express").Router();

const { all } = require("../controllers/usuarios");

router.get("/", all);

module.exports = router;
