// const express = require('express')
const mysql = require ('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host        : process.env.HOST,
    user        : process.env.USER,
    password    : process.env.PASSWORD,
    database    : process.env.DATABASE,
    port        : process.env.DB_PORT,
    dateStrings : process.env.DATE_TYPE
    
})


// To check if DB is connected
db.connect(function(err) {
    if (err) throw err;
    return console.log('Sever Is Connected To DB!');
  });

module.exports = db;
 