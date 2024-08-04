import React, { useState } from 'react';
import axios from 'axios';
import './ResetPasswordPage.css';
import { Link } from 'react-router-dom';

function ResetPasswordPage({ match }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      await axios.post(`https://guia-turistico-backend.onrender.com/api/reset-password/${match.params.code}`, { password });
      setSuccess('Senha redefinida com sucesso!');
    } catch (err) {
      setError('Erro ao redefinir a senha');
    }
  };

  return (
    <div className="reset-password-page">
      <h1>Redefinir Senha</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
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
        <Link to="/login" className="btn">Voltar para a pagina de login</Link>
        <button type="submit">Redefinir Senha</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
