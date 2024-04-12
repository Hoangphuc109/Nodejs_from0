const gethomecontroler = (req, res) => {
    res.send('Hello World! hoangphuc10 diem aduuu')
}
const gethp = (req, res) => {
    res.render('amazing')
}


module.exports = {
    gethomecontroler, gethp

}
