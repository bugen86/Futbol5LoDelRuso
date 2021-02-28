require("dotenv").config();
require("./database/config").dbConnect();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 4000;

//Variables de rutas
const usuarios = require("./routes/usuarios");
const reservas = require("./routes/reservas");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Uso de rutas
app.use("/usuarios", usuarios);
app.use("/reservas", reservas);

app.listen(port, () => console.log(`Corriendo en el puerto ${port}`));
