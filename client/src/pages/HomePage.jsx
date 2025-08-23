import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

function HomePage() {
    return (
        <div>
            <h1>Bem-vindo ao LinkHub</h1>
            <p>Sua plataforma para salvar e organizar links.</p>
            <nav>
                <Link to="/login" style={{ marginRight: '10px' }}>
                    Fazer Login
                </Link>
                <Link to="/register">
                    Criar Conta
                </Link>
            </nav>
        </div>
    );
}

export default HomePage;