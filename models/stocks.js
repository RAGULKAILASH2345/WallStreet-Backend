// module.exports=(sequelize,datatypes)=>{
//     const stocks=sequelize.define("stocks",{
//         email:{
//             type:datatypes.STRING,
//             primaryKey:true
//         },
//         Aquashop: {
//             type:datatypes.INTEGER,
//         },
//         RazerElectronics: {
//             type:datatypes.INTEGER,
//         },
//         BVInfra: {
//             type:datatypes.INTEGER,
//         },
//         GoalEnterprise: {
//             type:datatypes.INTEGER,
//         },
//         MedPharma: {
//             type:datatypes.INTEGER,
//         },
//         Paradigm: {
//             type:datatypes.INTEGER,
//         },
//         VIFinance: {
//             type:datatypes.INTEGER,
//         },
//         ForgeTech: {
//             type:datatypes.INTEGER,
//         },
//         Wallet: {
//             type:datatypes.INTEGER,
//         },
//     });
//     return stocks;
// }

const stock = {
    email:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    Aquashop: {
        type:Sequelize.INTEGER,
    },
    RazerElectronics: {
        type:Sequelize.INTEGER,
    },
    BVInfra: {
        type:Sequelize.INTEGER,
    },
    GoalEnterprise: {
        type:Sequelize.INTEGER,
    },
    MedPharma: {
        type:Sequelize.INTEGER,
    },
    Paradigm: {
        type:Sequelize.INTEGER,
    },
    VIFinance: {
        type:Sequelize.INTEGER,
    },
    ForgeTech: {
        type:Sequelize.INTEGER,
    },
    Wallet: {
        type:Sequelize.INTEGER,
    },
};
module.exports = {
    stock
}