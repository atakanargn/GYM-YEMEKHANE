var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '213.238.183.153',
    user: 'argininf_wp899 ',
    password: 'Atakan*1234',
    database: 'argininf_yemekhane'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;