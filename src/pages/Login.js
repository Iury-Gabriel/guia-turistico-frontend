import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://guia-turistico-backend.onrender.com/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="login-page">
            <h1 className='title'>Guia Turístico</h1>

            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Link to="/register" className="btn">ainda não tem uma conta? Clique aqui</Link>
                    <Link to="/forgot-password" className="btn">Esqueci minha senha</Link>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
