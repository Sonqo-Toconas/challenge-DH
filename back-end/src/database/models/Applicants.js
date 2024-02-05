module.exports = (sequelize, dataTypes) => {
    let alias = 'Aplicants'

    let cols = {
        dni: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        email:{
            type: dataTypes.STRING(45),
            allowNull: true,
            unique: true
        },
        phone:{
            type: dataTypes.STRING(45),
            allowNull: true,
            unique: true
        },
        url_linkedin:{
            type: dataTypes.STRING(45)
        },
        birthdate:{
            type: dataTypes.DATE
        },
        sex:{
            type: dataTypes.STRING(45)
        },
        image:{
            type: dataTypes.STRING(45)
        },
        profession:{
            type: dataTypes.STRING(45),
            allowNull: true
        }     
    }

    let config = {
        tableName: 'applicants',
        timestamps: false
    }

    const Applicants = sequelize.define(alias, cols, config);

    Applicants.associate = function (models) {
        Applicants.belongsTo(models.company, {
            as: "company",
            foreignKey: "company_id"
        })
    }

    return Applicants;
}