module.exports = (sequelize, DataTypes) => {
    const alias = "Color"
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
        tableName:"color",
        timestampts:false
    }
    const Color = sequelize.define(alias, cols, config)

    Color.associate = (models)=>{
        Color.hasMany(models.Product,{
            as:"Products",
            foreignKey:"color_id"
        });
    }

    return Color
}