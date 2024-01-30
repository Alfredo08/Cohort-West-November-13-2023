const {Pool} = require('pg');

const pool = new Pool({
    user: 'alfredosalazar',
    host: 'localhost',
    database: 'todos_db'
});

pool.connect()
    .then(() => {
        console.log('The database was connected successfully');
    })
    .catch((error) => {
        console.log('There is an error:', error); 
    });

module.exports = pool;