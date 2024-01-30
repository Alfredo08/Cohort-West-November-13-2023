const jwt = require('jsonwebtoken');
const SECRET = 'this_must_be_secret';

const validateToken = (req, res, next) => {
    const token = req.headers.usertoken;
    jwt.verify(token, SECRET, (error, decoded) => {
        if(error){
            return res.status(406).json({message: "Invalid token (Unauthorized)"});
        }
        req.userInfo = decoded;
        next();
    });
}

module.exports = validateToken;
