const express = require('express');
const router = express.Router();
const { Projeto } = require('../models');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

// middleware simples para proteger rotas
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Sem token' });
  const parts = auth.split(' ');
  if (parts.length !== 2) return res.status(401).json({ error: 'Token inválido' });
  const token = parts[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

// listagem pública
router.get('/', async (req, res) => {
  const projetos = await Projeto.findAll({ order: [['createdAt', 'DESC']] });
  res.json(projetos);
});

router.get('/:id', async (req, res) => {
  const projeto = await Projeto.findByPk(req.params.id);
  if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
  res.json(projeto);
});

// rotas protegidas: criar, atualizar, deletar
router.post('/', authMiddleware, async (req, res) => {
  const data = req.body;
  try {
    const p = await Projeto.create(data);
    res.json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  const projeto = await Projeto.findByPk(req.params.id);
  if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
  try {
    await projeto.update(req.body);
    res.json(projeto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const projeto = await Projeto.findByPk(req.params.id);
  if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
  await projeto.destroy();
  res.json({ ok: true });
});

module.exports = router;