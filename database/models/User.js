module.exports = (sequelize, DataTypes)=>{
    const alias = "User"
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING
        },
        surname:{
            type:DataTypes.STRING
        },
        avatar:{
            type:DataTypes.STRING
        },
        user_name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        phone:{
            type:DataTypes.STRING
        }
    }
    const config = {
        tableName:"users",
        timestampts:false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models)=>{
        User.hasMany(models.CartItem,{
            as:"cart_items",
            foreignKey:"user_id"
        });
        User.hasMany(models.ShoppedItem,{
            as:"shopped_items",
            foreignKey:"user_id"
        })
    }
    return User
}