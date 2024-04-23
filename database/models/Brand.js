module.exports = (sequelize, DataTypes) => {
    const alias = "Brand"
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
        tableName:"brand",
        timestampts:false
    }
    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models)=>{
        Brand.hasMany(models.Product,{
            as:"Products",
            foreignKey:"color_id"
        });
    }

    return Brand
}