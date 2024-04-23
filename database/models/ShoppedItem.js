module.exports = (sequelize, DataTypes)=>{
    const alias = "ShoppedItem"
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
        units_sold:{
            type:DataTypes.INTEGER
        },
        sell_date:{
            type:DataTypes.DATE
        },
        pay_method:{
            type:DataTypes.STRING
        }
    }
    const config = {
        tableName:"shopped_item",
        timestampts:false
    }
    const ShoppedItem = sequelize.define(alias, cols, config)

    ShoppedItem.associate = (models)=>{
        ShoppedItem.belongsTo(models.User,{
            as:"Usuario",
            foreignKey:"user_id"
        });
        ShoppedItem.belongsTo(models.Product,{
            as:"Product",
            foreignKey:"product_id"
        })
    }

    return ShoppedItem
}