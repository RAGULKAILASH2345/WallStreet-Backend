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
        noOfStocks: {
            type:datatypes.INTEGER,
        },
        description: {
            type: datatypes.STRING,
            allowNull: false,
        }
        
    });
    return transactions;
}