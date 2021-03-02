const Usuario = require("../models/Usuario");

const all = async (_, res) => {
    const data = await Usuario.find();
    res.json(data);
};

const insertar = async (req, res) => {
    const { name, lastName, phone, email } = req.body;
    await Usuario.insertMany({ name, lastName, phone, email });
};

module.exports = { all, insertar };
