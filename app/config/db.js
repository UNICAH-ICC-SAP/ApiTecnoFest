const mysql = require('mysql');
const CONFIG = require('./config');


const connection = mysql.createConnection({
    host: CONFIG.DB.HOST,
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
    database: CONFIG.DB.DATABASE,
    port: CONFIG.DB.PORT
});

module.exports = {
    connect: () => {
        connection.connect(err => {
            if (err) {
                console.error('Error conectándose a la base de datos:', err);
                return;
            }
            console.log('Conexión a la base de datos establecida.');
        });
    },
    getConnection: () => connection
};




