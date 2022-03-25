module.exports = {
    index: (req, res) => res.render('car/index', {user: "John Thor", messages: req.flash('success')}),
    addCar: (req, res) => res.render('car/addCar', {user: "John Thor"}),
}