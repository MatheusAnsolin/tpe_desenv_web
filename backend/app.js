require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const projetosRoutes = require('./routes/projetos');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// rotas API
app.use('/api/auth', authRoutes);
app.use('/api/projetos', projetosRoutes);

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// garantir sync do sequelize e iniciar servidor
(async () => {
  try {
    await sequelize.sync();
    console.log('DB synced');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Erro ao iniciar:', err);
  }
})();