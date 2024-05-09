const { createPool } = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'RMILaravel',
    connectionLimit: 10
});

// Performing the query to retrieve all rows from the 'products' table
pool.query(`SELECT * FROM products`, (err, rows) => {
    if (err) {
        console.error('Error retrieving data:', err);
    } else {
        // Outputting the rows to the console
        console.log('All rows from the database:');
        console.table(rows);
    }
});

module.exports = pool;
