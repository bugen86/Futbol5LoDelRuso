const Reserva = require("../models/Reserva");

const all = (_, res) => {
    Reserva.find()
        .then((response) => res.json(response))
        .catch((e) => console.log);
};

const guardar = async () => {
    const data = Reserva.insertMany();
};

module.exports = { all };
