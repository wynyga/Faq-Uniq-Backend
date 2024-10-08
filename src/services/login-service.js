import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from "../application/database.js"; // Hilangkan titik koma di sini

const login = async (email, password) => {
    const user = await db.collection('admin').findOne({ email: email });

    if (!user) {
        throw new Error('User not found');
    }

    if (!user.password) {
        throw new Error('Password not set');
    }

    const payload = {
        id: user._id,
        name: user.username,
        email: user.email
    };

    const secret = process.env.JWT_SECRET;
    const expiresIn = 60 * 60 * 1; // Satu jam

    const token = jwt.sign(payload, secret, { expiresIn: expiresIn });

    return {
        data: {
            token: token
        }
        
    };
};

export default { login }; // Ganti dengan 'export default'
