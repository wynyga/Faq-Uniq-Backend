import bcrypt from 'bcrypt';
import { db } from "../application/database.js"; 

const register = async (username, email, password) => {
    // Cek apakah user sudah ada
    const existingUser = await db.collection('admin').findOne({ email: email });
    
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash password menggunakan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    

    // Buat object user baru
    const newUser = {
        username: username,
        email: email,
        password: hashedPassword
    };

    // Simpan user ke database
    const result = await db.collection('admin').insertOne(newUser);

    // Return hasil
    return {
        message: 'User registered successfully',
        userId: result.insertedId
    };
};

export default { register };
