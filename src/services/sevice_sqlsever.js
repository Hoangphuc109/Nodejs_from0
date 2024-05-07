const poolPromise = require('../config/connect_sqlsever');

const getallbenefit = async () => {
    try {
        const pool = await poolPromise;
        const request = pool.request();
        const result = await request.query('SELECT * FROM [dbo].[BENEFIT_PLANS];');
        return result.recordset;
    } catch (error) {
        throw error;
    }
};

module.exports = { getallbenefit };
