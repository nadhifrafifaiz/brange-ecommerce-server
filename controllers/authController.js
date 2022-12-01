module.exports = {
    login: async (req, res) => {
        try {
            res.send({
                message: "Email And Password Doesn't Match",
                success: false,
            });
        } catch (error) {

        }
    }
}