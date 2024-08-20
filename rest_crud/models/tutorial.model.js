const tutorial = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define('tutorial', {
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        description: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    })

    return Tutorial
}

module.exports = tutorial