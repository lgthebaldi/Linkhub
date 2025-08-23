const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // <-- IMPORTE O JWT

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // 1. Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. Criar o novo usuário
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // 3. Enviar resposta de sucesso
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};


// NOVA FUNÇÃO DE LOGIN
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Verificar se o usuário existe no banco de dados
        const user = await User.findOne({ email });
        if (!user) {
            // Usamos uma mensagem genérica por segurança
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // 2. Comparar a senha enviada com a senha criptografada no banco
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // 3. Se as credenciais estiverem corretas, gerar um token JWT
        const payload = {
            user: {
                id: user.id // Guardamos o ID do usuário no token
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Nosso segredo, que virá do .env
            { expiresIn: '1h' }, // O token expira em 1 hora
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token }); // Enviamos o token para o cliente
            }
        );

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro no servidor');
    }
};