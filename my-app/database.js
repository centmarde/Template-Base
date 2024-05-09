const {
    createPool
} = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'RMILaravel',
    connectionLimit: 10
})

pool.query(`select * from products`, (err, rows) => {
    if (err) {
        return console.log(err);
    } else {
       return
    }
})

module.exports = pool;