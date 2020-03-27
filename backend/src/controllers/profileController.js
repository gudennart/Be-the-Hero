const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const Ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where('ong_id', Ong_id).select('*');
        return response.json(incidents);
    }
};