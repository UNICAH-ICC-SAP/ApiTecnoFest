'use strict'

// const DataBase = require('./app/config/db');
const CONFIG = require('./app/config/config');
const App = require('./app/app');

// DataBase.connect();

App.listen(CONFIG.APP_PORT, function (error) {
    if (error) return console.error(error);
    console.log(`Server running on port:  ${CONFIG.APP_PORT}`);
});
