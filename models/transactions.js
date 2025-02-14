module.exports=(sequelize,datatypes)=>{
    const transactions=sequelize.define("transactions",{
        id: {
            type:datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        email:{
            type:datatypes.STRING,
        },
        company: {
            type:datatypes.STRING,
        },
        flag: {
            type:datatypes.STRING,
        },
        amount:{
            type:datatypes.DOUBLE,
            allowNull: true
        },
        noOfStocks: {
            type:datatypes.INTEGER,
        },
        remaining:{
            type:datatypes.INTEGER,
            allowNull: true,
        },
        description: {
            type: datatypes.STRING,
            allowNull: false,
        }
        
    });
    return transactions;
}