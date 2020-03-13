
const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    pool,
    async query(query) {
        const client = await pool.connect();
        const result = await client.query(query);
        await client.release();
        return result;
    },

    async transaction(queries) {
        const client = await pool.connect();
        //transaction
        const results = [];
        for (let i = 0; i < queries.length; i++) {
            const result = await client.query(queries[i]);
            result.push(result);
        }
        //commit
        await client.release();
        return results;
    }
};