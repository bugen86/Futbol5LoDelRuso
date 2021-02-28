const router = require("express").Router();

const { all } = require("../controllers/reservas");

router.get("/", all);

module.exports = router;
