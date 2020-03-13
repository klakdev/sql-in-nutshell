

const { STATEMENTS, util } = require('../db/index.js');

module.exports = async () => {

    return {
        async delete() {
            return util.query(STATEMENTS.POSTS.DELETE_ALL);
        },
        async insert() {
            return util.query(STATEMENTS.POSTS.INSERT);
        },
        async select(data) {
            return util.query(STATEMENTS.POSTS.SELECT_ALL);
        },
        async update() {
            return util.query(STATEMENTS.POSTS.UPDATE_ALL);
        }
    }
};