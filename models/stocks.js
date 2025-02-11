module.exports=(sequelize,datatypes)=>{
    const stocks=sequelize.define("stocks",{
        email:{
            type:datatypes.STRING,
            primaryKey:true
        },
        QuantumCoreSystems: {
            type:datatypes.INTEGER,
        },
        NeonByteTechnologies: {
            type:datatypes.INTEGER,
        },
        HyperNovaSystems: {
            type:datatypes.INTEGER,
        },
        SkyNetRobotics: {
            type:datatypes.INTEGER,
        },
        TitanSportswear: {
            type:datatypes.INTEGER,
        },
        ProBallEquipment: {
            type:datatypes.INTEGER,
        },
        StrikeForceSports: {
            type:datatypes.INTEGER,
        },
        ZenithMotors: {
            type:datatypes.INTEGER,
        },
        OrionAutoTech: {
            type:datatypes.INTEGER,
        },
        VoltEdgeMotors: {
            type:datatypes.INTEGER,
        },
        TitanXAutomobiles: {
            type:datatypes.INTEGER,
        },
        StellarBank: {
            type:datatypes.INTEGER,
        },
        EverTrustFinancial: {
            type:datatypes.INTEGER,
        },
        NovaCapitalHoldings: {
            type:datatypes.INTEGER,
        },
        QuantumPay: {
            type:datatypes.INTEGER,
        },
        SwiftCart: {
            type:datatypes.INTEGER,
        },
        NeoWearFashion: {
            type:datatypes.INTEGER,
        },
        HorizonMart: {
            type:datatypes.INTEGER,
        },
        BuySmartRetail: {
            type:datatypes.INTEGER,
        },
        BioVantaPharmaceuticals: {
            type:datatypes.INTEGER,
        },
        MedexGenLabs: {
            type:datatypes.INTEGER,
        },
        NeuroSynBiotech: {
            type:datatypes.INTEGER,
        },
        GenovaHealth: {
            type:datatypes.INTEGER,
        },
        HorizonTechInnovations: {
            type:datatypes.INTEGER,
        },
        Wallet: {
            type:datatypes.INTEGER,
        },
        profit:{
            type: datatypes.DOUBLE,
            defaultValue: 0.0,
            validate:{
              min: 0.1,
            },
            check: {
              priceGreaterThanZero: {
                args: [0],
                msg: 'Price must be greater than zero',
              },
            },
          }
    });
    return stocks;
}
