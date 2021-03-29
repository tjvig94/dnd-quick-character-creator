const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');

class Feature extends Model { }

Feature.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        feature: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'feature'
    }
)

module.exports = Feature;