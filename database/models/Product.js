module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        brand_id: {
            type: DataTypes.INTEGER
        },
        img: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(9, 2)
        },
        discount: {
            type: DataTypes.DECIMAL(9, 2)
        },
        description: {
            type: DataTypes.TEXT
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        color_id: {
            type: DataTypes.INTEGER
        },
    };
    const config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.Color, {
            as: "color",
            foreignKey: "color_id"
        }
        );

        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brand_id"
        }
        );

        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        }
        );
        Product.hasMany(models.ShoppedItem,{
            as:"shopped",
            foreignKey:"product_id"
        });
        Product.hasMany(models.CartItem,{
            as:"wished",
            foreignKey:"product_id"
        })
    }
    return Product;
};