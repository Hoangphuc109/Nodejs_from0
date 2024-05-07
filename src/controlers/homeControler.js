const { json } = require('express');
const { Request } = require('mssql');
<<<<<<< HEAD
const connect_sqlsever = require('../config/connect_sqlsever');
=======
const connect_sqlsever = require('../config/conn_sqlsever');
>>>>>>> 57f8800e97be10fa2e2b2e80b3bf8ea38c7f3745

const { getallusers, getIdEmployee, createEm, updateEm, deleteEm,
    //-----------------------------------------------------------
    getall_payrate,
    //===========================================================
<<<<<<< HEAD
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
=======
} = require('../services/svc_mysql')

const {
    getallbenefit, getallemployment, getallemployment_working, getalljob_history, getallpersonal, createAllpersonal
} = require('../services/svc_sqlsever')


const gethomecontroler = (req, res) => {

    return res.render('INTERGRATION')
}


>>>>>>> 57f8800e97be10fa2e2b2e80b3bf8ea38c7f3745
const gethomepage = async (req, res) => {
    let results = await getallusers();
    return res.render('home.ejs', { ListEmployee: results })
}
const create = (req, res) => {
    res.render('create.ejs')
}
const createEmployee = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;

    await createEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear)
    let results = await getallusers();
    return res.json({ employee_create: results });
    //=====>đưa ra chuỗi 

};

const getEmployeeId = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('edit.ejs', { employee_update: employee })

}
const updateinfo = async (req, res) => {
    let { idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear } = req.body;
    await updateEm(idem, emnum, lname, fname, ssn, payrate, idpayrate, vcd, paidtodate, paidlastyear);
    let results = await getallusers();
    return res.json({ employee_update: results });
};

const deleteEmployee = async (req, res) => {
    const employeeid = req.params.id;
    let employee = await getIdEmployee(employeeid);
    res.render('delete.ejs', { employee_delete: employee })

}

const deleteinfo = async (req, res) => {
    const id = req.body.idem;
    await deleteEm(id);
    // res.redirect('/home')
    let results = await getallusers();
    return res.json({ employee_delete: results });
    //=> xóa đưa ra chuỗi 
};
//______________________________________________________//
<<<<<<< HEAD
//PAYRATES



=======
>>>>>>> 57f8800e97be10fa2e2b2e80b3bf8ea38c7f3745

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
<<<<<<< HEAD
=======

};
//=========================================================================================================================
//get table
const getbenefit = async (req, res) => {
    const data = await getallbenefit();
    return res.json({ data });
};
const getemployment = async (req, res) => {
    const data = await getallemployment();
    return res.json({ data });
};
const getemployment_working = async (req, res) => {
    const data = await getallemployment_working();
    return res.json({ data });
};
const getjob_history = async (req, res) => {
    const data = await getalljob_history();
    return res.json({ data });
};
const getpersonal = async (req, res) => {
    const data = await getallpersonal();
    return res.json({ data });
};

// create 
// const createper = (req, res) => {
//     res.render('cr_em_sqlsever.ejs')
// }

const createpersonal = async (req, res) => {
    try {
        const {
            idem, lname, fname, mname, birthday, ssn, drivers, adr1, adr2, curcity, curcountry, curzip, curgen, curphone, curmail, curstt, ethnicity, sharestt, benefitid
        } = req.body;
        await createAllpersonal(idem, lname, fname, mname, birthday, ssn, drivers, adr1, adr2, curcity, curcountry, curzip, curgen, curphone, curmail, curstt, ethnicity, sharestt, benefitid);
        res.send('Employee created successfully.');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while creating the employee.');
    }
>>>>>>> 57f8800e97be10fa2e2b2e80b3bf8ea38c7f3745
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
    gethomecontroler, gethomepage, createEmployee, create, getEmployeeId, updateinfo,
    deleteEmployee, deleteinfo,
    //----------------------------
    gethomepayrate,
    //=================================
<<<<<<< HEAD
    getbenefit,
=======
    getbenefit, getemployment, getemployment_working, getjob_history, getpersonal, createpersonal
>>>>>>> 57f8800e97be10fa2e2b2e80b3bf8ea38c7f3745
}
