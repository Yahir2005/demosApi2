const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pregunta = sequelize.define('Pregunta', {
    PreguntaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    TextoPregunta: { // Ajusta el nombre según lo que necesites
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: 'Pregunta',
    timestamps: false,
});

module.exports = Pregunta;
