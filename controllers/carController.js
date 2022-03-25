module.exports = {
    index: (req, res) => res.render('car/index', {user: "John Budiman", messages: req.flash('success')}),
    addCar: (req, res) => res.render('car/addCar', {user: "John Budiman"}),
    post : {
        addCar: async (req, res) => {
            console.log(req.body)
            try {
                cars.push({
                    id: Date.now().toString(),
                    name:  req.body.name,
                    price: req.body.price,
                    image: req.body.image
                })
                req.flash('success', 'Berhasil menambahkan mobil')
                res.redirect('/car')
            } catch (error) {
                res.redirect('/car/add-car')
            }
            res.redirect('/car')
        }
    }
}