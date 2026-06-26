require('dotenv').config();
const bcrypt = require('bcrypt');
const { sequelize, User, Projeto } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    const password = 'Password123!';
    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await User.create({ email: 'admin@marcenaria.local', passwordHash, name: 'Administrador' });
    console.log('Admin criado:', admin.email, 'senha:', password);

    await Projeto.bulkCreate([
      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },
      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },
      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },
      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },      {
        titulo: 'Cozinha Planejada Moderna',
        descricao: 'Projeto de cozinha com armários em MDF, acabamento com puxadores embutidos.',
        imagemUrl: 'https://a-static.mlcdn.com.br/420x420/armario-de-cozinha-joana-completo-6-portas-1-gaveta-com-balcao-compacto-multiuso-para-cozinha-planejada-moderna-maxi-do-brasil/selectmoveis/armjoanadamoff/a11adb622fa990b173eded58ca46369d.jpeg',
        cliente: 'Residência Silva',
        dimensoes: '3.5m x 2.8m',
        materiais: 'MDF, Laca branca',
        preco: 8500.00
      },
      {
        titulo: 'Roupeiro Sob Medida',
        descricao: 'Roupeiro com portas de correr e divisórias internas personalizadas.',
        imagemUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_939821-MLB83337996649_032025-T.webp',
        cliente: 'Apartamento Costa',
        dimensoes: '2.5m x 2.4m',
        materiais: 'MDF amadeirado',
        preco: 4200.00
      },
    ]);
    console.log('Projetos seed criados');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();