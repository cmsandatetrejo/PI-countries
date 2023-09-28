const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      }
    },
    temporada: {
      type: DataTypes.ENUM('verano','otoño', 'invierno', 'primavera'),
    },
  });
};