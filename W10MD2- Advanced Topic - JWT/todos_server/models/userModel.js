const pool = require('./../database/config');

const getOne = (data) => {
    console.log(data);
    const nativeQuery = `
        SELECT *
        FROM users
        WHERE email = $1;
    `;

    return pool.query(nativeQuery, data)
}

const Users = {
    getOne
};

module.exports = Users;