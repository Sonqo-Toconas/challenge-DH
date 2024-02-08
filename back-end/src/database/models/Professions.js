module.exports = (sequelize, dataTypes) => {
    let alias = 'Professions'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: 'professions',
        timestamps: false
    }

    const Professions = sequelize.define(alias, cols, config);

    Professions.associate = function (models) {
        Professions.hasMany(models.applicant, {
            as: "applicants",
            foreignKey: "professions_id"
        })
    }

    return Professions;
}