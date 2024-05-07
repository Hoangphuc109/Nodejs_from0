const { json } = require('express');
const { Request } = require('mssql');
const connect_sqlsever = require('../config/connect_sqlsever');

const { getallusers, getIdEmployee, createEm, updateEm, deleteEm,
    //-----------------------------------------------------------
    getall_payrate,
    //===========================================================
} = require('../services/sevice')

const {
    getallbenefit
} = require('../services/sevice_sqlsever')

//test first
const gethp = (req, res) => {

    return res.render('amazing')
}

const gethomecontroler = (req, res) => {

    return res.render('amazing')
}


const create = (req, res) => {
    res.render('create.ejs')
}

///->>>>gethomecontroler lỗi k cần quan tâm 
const gethomepage = async (req, res) => {
    let results = await getallusers();
    return res.render('home.ejs', { ListEmployee: results })
}

const createEmployee = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    await createEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear)
    res.redirect('/home')

};
//get ok 
const getEmployeeId = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('edit.ejs', { employee_update: employee })
    //Thằng id ở "req.params.id" là mình tự đặt nếu thay đổi thì ở trang web sau dấu" /:id " 
    //thì cũng phải thay đổi cho giống nhau
}

// update not ok
const updateinfo = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    await updateEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear);
    res.redirect('/home')
    // res.send('update da xong ')
};
const deleteEmployee = async (req, res) => {
    // let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    // let [results, fields] = await connection.query(
    //     'DELETE FROM `mydb`.`employee WHERE `idEmployee` = ?;',
    //     [idem]
    // )
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('delete.ejs', { employee_delete: employee })
}
const deleteinfo = async (req, res) => {
    const id = req.body.idem;
    await deleteEm(id);
    res.redirect('/home')
};
//______________________________________________________//
//PAYRATES




// const gethomepayrate = async (req, res) => {
//     let results = await getall_payrate();
//     return res.render('payrates.ejs', { List_payrate: results })
// }
const gethomepayrate = async (req, res) => {
    try {
        let results = await getall_payrate();
        return res.json({ ListEmployee: results });
    } catch (error) {
        // Handle error
        return res.status(500).json({ error: 'dit me may di ngu' });
    }
};

const getbenefit = async (req, res) => {
    try {
        // Get a connection pool from the connection pool promise
        const pool = await connect_sqlsever;

        // Use the connection pool to create a new request
        const request = pool.request();

        // Define your SQL query
        const query = 'SELECT * FROM [dbo].[BENEFIT_PLANS];'; // Replace 'YourTableName' with the actual table name

        // Execute the query
        const result = await request.query(query);

        // Extract the recordset from the result object
        const data = result.recordset;

        // Send the data as JSON response
        return res.json({ data });
    } catch (error) {
        // Handle errors
        console.error('Error executing SQL query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {
    gethomecontroler, gethp,
    gethomepage, createEmployee,
    create, getEmployeeId, updateinfo,
    deleteEmployee, deleteinfo,
    //----------------------------
    gethomepayrate,
    //=================================
    getbenefit,
}
