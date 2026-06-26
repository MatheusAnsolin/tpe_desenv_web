import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { apiFetch } from '../api';

export default function PublicList() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch('/projetos');
        setProjetos(data);
      } catch (err) {
        console.error('Erro ao buscar projetos', err);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Portfólio de Projetos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
        {projetos.map(p => <ProjectCard key={p.id} projeto={p} />)}
      </div>
    </div>
  );
}