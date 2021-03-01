const { Schema, model } = require("mongoose");

const reservaSchema = Schema({
    cancha: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    ts_created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = model("reservas", reservaSchema);
