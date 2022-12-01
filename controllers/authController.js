const User = require('../models/User')

module.exports = {
    register: async (req, res) => {
        try {
            console.log(req.body)
            const {
                firstName,
                lastName,
                email,
                password,
                picturePath,
                dateOfBirth
            } = req.body

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                picturePath,
                dateOfBirth
            })
            const savedUser = await newUser.save()
            res.status(200).json(savedUser)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}