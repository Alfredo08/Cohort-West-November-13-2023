const pool = require('./../database/config');

const getTodosByUser = (data) => {
    const nativeQuery = `
        SELECT *
        FROM todos
        WHERE user_id = $1;
    `;
    return pool.query(nativeQuery, data);
}

const Todos = {
    getTodosByUser
};

module.exports = Todos;