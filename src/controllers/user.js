class UserController {
    getUser(req, res) {
        res.status(200).json('ok');
    }
}
module.exports = new UserController;