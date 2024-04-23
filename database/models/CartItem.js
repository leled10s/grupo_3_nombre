module.exports = (sequelize, DataTypes)=>{
    const alias = "CartItem"
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_id:{
            type:DataTypes.INTEGER
        },
        product_id:{
            type:DataTypes.INTEGER
        },
        units:{
            type:DataTypes.INTEGER
        },
        data_added:DataTypes.DATE
    }
    const config = {
        tableName:"cart_item",
        timestampts:false
    }
    const CartItem = sequelize.define(alias, cols, config)

    CartItem.associate = (models)=>{
        CartItem.belongsTo(models.User,{
            as:"Usuario",
            foreignKey:"user_id"
        });
        CartItem.belongsTo(models.Product,{
            as:"Product",
            foreignKey:"product_id"
        })
    }

    return CartItem
}