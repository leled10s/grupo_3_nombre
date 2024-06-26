module.exports = (sequelize, DataTypes) => {
    const alias = "Category"
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING
        }
    }
    const config = {
        tableName:"category",
        timestampts:false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models)=>{
        Category.hasMany(models.Product,{
            as:"Products",
            foreignKey:"color_id"
        });
    }

    return Category
}