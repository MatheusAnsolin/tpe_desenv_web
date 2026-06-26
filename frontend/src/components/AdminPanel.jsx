import React, { useEffect, useState } from 'react';
import Login from './Login';
import { apiFetch } from '../api';
import ProjectForm from './ProjectForm';

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [projetos, setProjetos] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const tokenUser = localStorage.getItem('user');
    if (tokenUser) setUser(JSON.parse(tokenUser));
    load();
  }, []);

  async function load() {
    try {
      const data = await apiFetch('/projetos');
      setProjetos(data);
    } catch (err) {
      console.error(err);
    }
  }

  function onLogin(userObj) {
    setUser(userObj);
    localStorage.setItem('user', JSON.stringify(userObj));
    load();
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  }

  async function remove(id) {
    if (!confirm('Confirmar exclusão?')) return;
    try {
      await apiFetch(`/projetos/${id}`, { method: 'DELETE' });
      load();
    } catch (err) { alert('Erro: ' + (err.error || err.message)); }
  }

  return (
    <div>
      {!user ? (
        <Login onLogin={onLogin} />
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Painel Administrativo</h2>
            <div>
              <span>Olá, {user.name || user.email}</span>
              <button onClick={logout} style={{ marginLeft: 8 }}>Sair</button>
            </div>
          </div>

          <ProjectForm key={editing ? editing.id : 'new'} projeto={editing} onSaved={() => { setEditing(null); load(); }} />

          <h3 style={{ marginTop: 20 }}>Projetos</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>#</th><th>Título</th><th>Cliente</th><th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projetos.map(p => (
                <tr key={p.id} style={{ borderTop: '1px solid #eee' }}>
                  <td style={{ padding: 8 }}>{p.id}</td>
                  <td>{p.titulo}</td>
                  <td>{p.cliente}</td>
                  <td>
                    <button onClick={() => setEditing(p)}>Editar</button>
                    <button onClick={() => remove(p.id)} style={{ marginLeft: 8 }}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}