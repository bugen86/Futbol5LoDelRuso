const mongoose = require("mongoose");

//Variables de entorno para la conexion, usuario, password
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@f5ldr.ciknc.mongodb.net`;

//Conexion a la base de datos de mongo atlas
const dbConnect = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log(
            `Conectado Correctamente a la base de datos en el puerto ${process.env.DB_PORT}`
        );
    } catch (error) {
        console.error(error);
    }
};

module.exports = { dbConnect };
