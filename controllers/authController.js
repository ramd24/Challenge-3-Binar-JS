const bcrypt = require('bcrypt')
const passport = require('passport')
const passportInit = require('../passport-config')

passportInit(
    passport,
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)

module.exports = {
    login: (req, res) => res.render('auth/login'),
    register: (req, res) => res.render('auth/register'),
    post: {
        login: passport.authenticate('local', {
            successRedirect: '/dashboard', // ketika autentikasi berhasil akan redirect ke path ini
            failureRedirect: '/auth/login', // ketika autentikasi gagal akan redirect ke path ini
            failureFlash: true,
        }),
        register: async (req, res) => {
            if (req.body.password !== req.body.password2) {
                req.flash('error', 'Password tidak sama')
                return res.redirect('/auth/register')
            }
            if (req.body.password.length < 6) {
                req.flash('error', 'Password terlalu pendek')
                return res.redirect('/auth/register')
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            try {
                users.push({
                    id: Date.now().toString(),
                    username: req.body.username,
                    password: hashedPassword
                })
                res.redirect('/auth/login')
            } catch (error) {
                res.redirect('/auth/register')
            }

            console.log(users)
        }
    }
}