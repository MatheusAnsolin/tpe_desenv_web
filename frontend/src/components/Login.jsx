import React, { useState } from 'react';
import { apiFetch } from '../api';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('admin@marcenaria.local');
  const [password, setPassword] = useState('Password123!');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw res;
      const data = await res.json();
      localStorage.setItem('token', data.token);
      onLogin(data.user);
    } catch (err) {
      const text = await (err.text ? err.text() : Promise.resolve(JSON.stringify(err)));
      alert('Erro ao logar: ' + text);
    } finally { setLoading(false); }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 420 }}>
      <h2>Login Administrador</h2>
      <div>
        <label>Email</label><br />
        <input value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 8 }}>
        <label>Senha</label><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
      </div>
    </form>
  );
}