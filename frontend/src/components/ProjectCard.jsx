import React from 'react';

export default function ProjectCard({ projeto }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <div style={{ height: 150, background: '#f4f4f4', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {projeto.imagemUrl ? <img src={projeto.imagemUrl} alt={projeto.titulo} style={{ maxHeight: '100%', maxWidth: '100%' }} /> : <span>Sem imagem</span>}
      </div>
      <h3>{projeto.titulo}</h3>
      <p style={{ fontSize: 14 }}>{projeto.descricao}</p>
      <small>Cliente: {projeto.cliente || '—'}</small>
    </div>
  );
}