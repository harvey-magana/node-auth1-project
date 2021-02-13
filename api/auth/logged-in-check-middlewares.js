module.exports = (req, res, next) => {
    if (req.session && res.session.user) {
        next();
    } else {
        res.status(401).json({
            message: 'not logged in'
        })
    }
}