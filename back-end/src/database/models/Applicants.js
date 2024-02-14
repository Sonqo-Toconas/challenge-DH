module.exports = (sequelize, dataTypes) => {
    let alias = 'Applicants'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: dataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: dataTypes.STRING
        },
        URL_linkedin: {
            type: dataTypes.STRING
        },
        birthday: {
            type: dataTypes.DATE
        },
        sex: {
            type: dataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        },
        professions_id: {
            type: dataTypes.INTEGER
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
        tableName: 'applicants',
        timestamps: false
    }

    const Applicants = sequelize.define(alias, cols, config);

    Applicants.associate = function (models) {
        Applicants.belongsTo(models.Professions, {
            as: "professions",
            foreignKey: "professions_id"
        })
    }

    return Applicants;
}