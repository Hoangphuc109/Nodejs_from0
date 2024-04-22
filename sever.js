require('dotenv').config();
const express = require('express')
const ConfigViewEngine = require('./src/config/viewengine')
const webroute = require('./src/routes/web_Employee')
const webroute1 = require('./src/routes/web_pay_rate')
const path = require('path');
const router = require('./src/routes/web_Employee');
const app = express();
const port = process.env.PORT || 8888;
// const hostname = process.env.hostname;
// trong trường hợp không link được lỗi config view engine
//lên gõ stack overflow là có hết
// khai báo 
// app.set('views ', path.join(__dirname, './src/views'));


ConfigViewEngine(app);
// app.use(express.static(path.join(__dirname, "./src/"))); 

//config req.body
app.use(express.json());//UsedtoparseJSONbodies 
app.use(express.urlencoded());//ParseURL-encodedbodies 


//khai báo route
app.use('/', webroute)
app.use('/', webroute1)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





