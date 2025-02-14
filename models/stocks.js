module.exports = (sequelize, datatypes) => {
  const stocks = sequelize.define("stocks", {
    email: {
      type: datatypes.STRING,
      primaryKey: true,
    },
    QuantumCoreSystems: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    NeonByteTechnologies: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    HyperNovaSystems: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    SkyNetRobotics: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    TitanSportswear: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    ProBallEquipment: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    StrikeForceSports: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    ZenithMotors: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    OrionAutoTech: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    VoltEdgeMotors: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    TitanXAutomobiles: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    StellarBank: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    EverTrustFinancial: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    NovaCapitalHoldings: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    QuantumPay: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    SwiftCart: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    NeoWearFashion: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    HorizonMart: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    BuySmartRetail: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    BioVantaPharmaceuticals: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    MedexGenLabs: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    NeuroSynBiotech: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    GenovaHealth: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    HorizonTechInnovations: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    Wallet: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    },
    profit: {
      type: datatypes.DOUBLE,
      defaultValue: 0.0,
      validate: {
        min: 0.0,
      },
      check: {
        priceGreaterThanZero: {
          args: [0],
          msg: "Price must be greater than zero",
        },
      },
    },
  });
  return stocks;
};
