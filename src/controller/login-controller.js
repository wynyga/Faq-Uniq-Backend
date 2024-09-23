import loginService from "../services/login-service.js"; // Pastikan ada '.js' di jalur impor

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await loginService.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default { login }; // Ganti dengan 'export default'
