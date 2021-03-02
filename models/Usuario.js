const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        ts_created: {
            type: Date,
            default: Date.now(),
        },
        ts_updated: {
            type: Date,
            default: Date.now(),
        },
        enable: {
            type: Boolean,
            default: true,
        },
    },
    { versionKey: "_Probando" }
);

module.exports = model("usuarios", UsuarioSchema);
