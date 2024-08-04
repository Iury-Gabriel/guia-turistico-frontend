import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPasswordPage.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://guia-turistico-backend.onrender.com/api/request-password-reset', { email });
      setStatus('Instruções para redefinição de senha enviadas para o e-mail.');
    } catch (error) {
      setStatus('Erro ao solicitar redefinição de senha.');
    }
  };

  return (
    <div className="forgot-password-page">
      <h1>Esqueci minha Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar Código</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default ForgotPasswordPage;
