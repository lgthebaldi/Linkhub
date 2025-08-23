import React from 'react';
import { Navigate } from 'react-router-dom';

// Este componente recebe outro componente como "filho" (children)
function ProtectedRoute({ children }) {
    // 1. Verificamos se existe um token no localStorage
    const token = localStorage.getItem('token');

    // 2. Se NÃO houver token...
    if (!token) {
        // ...redirecionamos o usuário para a página de login.
        // O componente <Navigate> faz o redirecionamento declarativo.
        return <Navigate to="/login" />;
    }

    // 3. Se houver um token, renderizamos o componente "filho" que foi passado.
    // Em nosso caso, será a DashboardPage.
    return children;
}

export default ProtectedRoute;