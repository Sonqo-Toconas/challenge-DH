module.exports = (sequelize, dataTypes) => {
    let alias = 'Company'

    let cols = {
        id_company: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(45),
        },
        place:{
            type: dataTypes.STRING(45),
        },
        phone:{
            type: dataTypes.STRING(45),
        },
    }

    let config = {
        tableName: 'company',
        timestamps: false
    }

    const Company = sequelize.define(alias, cols, config);

    Company.associate = function (models) {
        Company.hasMany(models.applicant, {
            as: "applicants",
            foreignKey: "company_id"
        })
    }

    return Company;
}