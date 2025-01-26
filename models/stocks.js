module.exports=(sequelize,datatypes)=>{
    const stocks=sequelize.define("stocks",{
        email:{
            type:datatypes.STRING,
            primaryKey:true
        },
        Aquashop: {
            type:datatypes.INTEGER,
        },
        RazerElectronics: {
            type:datatypes.INTEGER,
        },
        BVInfra: {
            type:datatypes.INTEGER,
        },
        GoalEnterprise: {
            type:datatypes.INTEGER,
        },
        MedPharma: {
            type:datatypes.INTEGER,
        },
        Paradigm: {
            type:datatypes.INTEGER,
        },
        VIFinance: {
            type:datatypes.INTEGER,
        },
        ForgeTech: {
            type:datatypes.INTEGER,
        },
        Wallet: {
            type:datatypes.INTEGER,
        },
    });
    return stocks;
}
