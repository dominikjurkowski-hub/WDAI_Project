
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = { userId: decoded.userId };
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};
