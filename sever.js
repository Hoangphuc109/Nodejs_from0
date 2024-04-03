const express = require('express')
const app = express()
const port = 8081
// trong trường hợp không link được lỗi config view engine
//lên gõ stack overflow là có hết
// khai báo 
// const path = require ('path');
app.set('views', './src/views')
//app.set('views ',path.join(__dirname,'views'));
app.set('view engine', 'ejs')
//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! hoangphuc10 diem')
})


app.get('/hp', (req, res) => {
    // res.send('phuc dep trai')

    res.render('amazing.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
