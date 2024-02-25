module.exports = (sequelize, dataTypes) => {
    let alias = 'Companies'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT(),
            allowNull: false
        }
    }

    let config = {
        tableName: 'companies',
        timestamps: false
    }

    const Companies = sequelize.define(alias, cols, config);

    return Companies;
}