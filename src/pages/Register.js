import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://guia-turistico-backend.onrender.com/api/register', { name, email, password });
            navigate('/login');
        } catch (error) {
            console.error('Erro ao registrar:', error);
        }
    };

    return (
        <div className="login-page">
            <h1 className='title'>Guia Turístico</h1>
            <div className="login-container">
                <h1>Registrar-se</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <Link to="/login" className="btn">já tem uma conta? Clique aqui</Link>
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
