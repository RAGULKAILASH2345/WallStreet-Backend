module.exports=(sequelize,datatypes)=>{
    // const transactions=datatypes.define("transactions",{
    //     id: {
    //         type:datatypes.INTEGER,
    //         primaryKey:true,
    //         autoIncrement: true,
    //     },
    //     email:{
    //         type:datatypes.STRING,
    //     },
    //     company: {
    //         type:datatypes.STRING,
    //     },
    //     flag: {
    //         type:datatypes.STRING,
    //     },
    //     amount:{
    //         type:datatypes.DOUBLE,
    //         allowNull: true
    //     },
    //     noOfStocks: {
    //         type:datatypes.INTEGER,
    //     },
    //     remaining:{
    //         type:datatypes.INTEGER,
    //         allowNull: true,
    //     },
    //     description: {
    //         type: datatypes.STRING,
    //         allowNull: false,
    //     }
        
    // });
    const transactions = sequelize.define("transactions", {
        id: {
          type: datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: datatypes.STRING,
          allowNull: false,
        },
        company: {
          type: datatypes.STRING,
          allowNull: false,
        },
        description: {
          type: datatypes.STRING,
        },
        amount: {
          type: datatypes.FLOAT,
          allowNull: false,
        },
        flag: {
          type: datatypes.STRING,
          allowNull: false,
        },
        noOfStocks: {
          type: datatypes.INTEGER,
          allowNull: false,
        },
        remaining: {
          type: datatypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          type: datatypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: datatypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
      });
      
    return transactions;
}