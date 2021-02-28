const Reserva = require("../models/Reserva");

const all = async (_, res) => {
    const data = await Reserva.find();
    res.json(data);
};

module.exports = { all };
