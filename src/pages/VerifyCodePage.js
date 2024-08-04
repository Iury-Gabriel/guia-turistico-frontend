import React, { useState } from 'react';
import axios from 'axios';
import './VerifyCodePage.css';
import { Link } from 'react-router-dom';

function VerifyCodePage({ match }) {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setStatus('As senhas não coincidem.');
      return;
    }

    try {
      await axios.post(`https://guia-turistico-backend.onrender.com/api/reset-password/${code}`, { password });
      setStatus('Senha redefinida com sucesso!');
    } catch (error) {
      setStatus('Erro ao redefinir a senha.');
    }
  };

  return (
    <div className="verify-code-page">
      <h1>Redefinir Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o código de verificação"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar Nova Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Redefinir Senha</button>
        <Link to="/login" className="btn">Voltar para a pagina de login</Link>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default VerifyCodePage;
