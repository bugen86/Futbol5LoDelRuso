const { Schema, model } = require("mongoose");

const reservaSchema = Schema({
    cancha: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ts_created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = model("reservas", reservaSchema);
