module.exports = (sequeize, DataTypes) => {
    const User = sequeize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    })
    return User;
}