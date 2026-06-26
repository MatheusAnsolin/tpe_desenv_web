const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Projeto = sequelize.define('Projeto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true },
    imagemUrl: { type: DataTypes.STRING, allowNull: true }, // URL ou caminho
    cliente: { type: DataTypes.STRING, allowNull: true },
    dimensoes: { type: DataTypes.STRING, allowNull: true },
    materiais: { type: DataTypes.STRING, allowNull: true },
    preco: { type: DataTypes.DECIMAL(10,2), allowNull: true }
  }, {
    tableName: 'projetos',
    timestamps: true
  });

  return Projeto;
};