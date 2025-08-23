import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <-- 1. IMPORTE O useNavigate


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // <-- 2. INICIALIZE O HOOK

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password,
            });

            const { token } = response.data;
            localStorage.setItem('token', token);
            
            alert('Login bem-sucedido!');
            navigate('/dashboard'); // <-- 3. REDIRECIONE O USUÁRIO

        } catch (error) {
            console.error('Erro no login:', error.response ? error.response.data : error.message);
            alert('Falha no login. Verifique suas credenciais.');
        }
    };

    return (
        <div>
            <h1>Página de Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default LoginPage; // <-- ADICIONE ESTA LINHA NO FINAL