import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => { // Transforme em async
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        name,
        email,
        password,
      });
      console.log(response.data); // Mostra a resposta do backend
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Ocorreu um erro ao tentar cadastrar.');
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;