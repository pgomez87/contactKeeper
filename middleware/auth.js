// middleware is function that have access to the request and response function
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get the token from header
    const token = req.header('x-auth-token')

    // Check if not token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    try {
        // Here we check that the user in the payload is the same as the actual user
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}