const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,     
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    continents: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
    }
  });
};