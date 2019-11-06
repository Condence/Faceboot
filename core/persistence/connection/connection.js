const config = require("../../../config");
const mongoose = require("mongoose");
const mysql = require('mysql');
const logger = require("../../../utils/logger");

 // MONGODB
mongoose.connect(config.mongodb.defaultconnection,{
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10
});

mongoose.connection.on("connected", ()=>{ 
    logger.info(`Mongoose connected to: ${config.mongodb.defaultconnection}`);
});

mongoose.connection.on("error", (err)=>{
    logger.error(`Mongoose error: ${err}`);
});

mongoose.connection.on("disconnected", ()=>{
    logger.info(`Mongoose disconnected`);
});
// MYSQL 

const connection_mysql = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});
connection_mysql.connect((err) => {
    if (err) {
        throw err;
    } 
    logger.info('Connected to database mysq');
});
global.connection_mysql = connection_mysql;