const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema(
    {
        name: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        phone: {
            type: Number,
            require: true,
        },
        email: {
            type: String,
            require: true,
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
