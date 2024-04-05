const jwt = require("jsonwebtoken")
exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo?.email,
        role: userInfo?.role
    }
    const token = jwt.sign(payload,  "secret", {
        expiresIn: '4d'
    })
    return token;
}