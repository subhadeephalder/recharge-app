var util = require('util')
var mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'dbuser',
    password        : '1234',
    database        : 'rechargeportal'
});

pool.getConnection(function(err,connection,){
    if(err) throw err;
        if(connection)
        connection.release()
    return
})

pool.query = util.promisify(pool.query)

module.exports = pool ;