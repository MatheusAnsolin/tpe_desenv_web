import React, { useEffect, useState } from 'react';
import { apiFetch } from '../api';

export default function ProjectForm({ projeto, onSaved }) {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    cliente: '',
    imagemUrl: '',
    dimensoes: '',
    materiais: '',
    preco: ''
  });

  useEffect(() => {
    if (projeto) setForm(projeto);
    else setForm({ titulo: '', descricao: '', cliente: '', imagemUrl: '', dimensoes: '', materiais: '', preco: '' });
  }, [projeto]);

  async function salvar(e) {
    e.preventDefault();
    try {
      if (projeto && projeto.id) {
        await apiFetch(`/projetos/${projeto.id}`, { method: 'PUT', body: JSON.stringify(form) });
      } else {
        await apiFetch('/projetos', { method: 'POST', body: JSON.stringify(form) });
      }
      onSaved();
    } catch (err) {
      alert('Erro: ' + (err.error || err.message));
    }
  }

  return (
    <form onSubmit={salvar} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6, maxWidth: 720 }}>
      <h3>{projeto ? 'Editar Projeto' : 'Novo Projeto'}</h3>
      <div>
        <input placeholder="Título" value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 8 }}>
        <textarea placeholder="Descrição" value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })} style={{ width: '100%' }} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <input placeholder="Cliente" value={form.cliente} onChange={e => setForm({ ...form, cliente: e.target.value })} />
        <input placeholder="Dimensões" value={form.dimensoes} onChange={e => setForm({ ...form, dimensoes: e.target.value })} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <input placeholder="Materiais" value={form.materiais} onChange={e => setForm({ ...form, materiais: e.target.value })} style={{ flex: 1 }} />
        <input placeholder="Preço (ex: 1234.56)" value={form.preco} onChange={e => setForm({ ...form, preco: e.target.value })} />
      </div>
      <div style={{ marginTop: 8 }}>
        <input placeholder="URL da Imagem" value={form.imagemUrl} onChange={e => setForm({ ...form, imagemUrl: e.target.value })} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}