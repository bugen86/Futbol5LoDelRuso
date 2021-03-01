const Reserva = require("../models/Reserva");

const all = (_, res) => {
    Reserva.find()
        .then((response) => res.json(response))
        .catch((e) => console.log);
};

module.exports = { all };
