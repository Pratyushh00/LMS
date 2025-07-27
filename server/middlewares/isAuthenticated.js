import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.statuus(401).json({
                message: 'User not Authorised',
                success: false
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.statuus(401).json({
                message: 'Incorrect token',
                success: false
            })
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}

export default isAuthenticated;