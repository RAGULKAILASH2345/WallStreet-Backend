module.exports = (sequelize, datatypes) => {
  const stocks = sequelize.define("stocks", {
    email: {
      type: datatypes.STRING,
      primaryKey: true,
    },
    ABCIndustries: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    DEFTechLtd: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },

      defaultValue: 0,
    },
    ClindaPharmaceuticals: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    GlobalEnergyCorp: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    // TitanSportswear: {
    //   type: datatypes.INTEGER,
    //   validate: {
    //     min: 0,
    //   },
    // },
    LMNMotors: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    PDFSoftwareSolutions: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    EclipseSolarTechnologies: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    SunshineRetailers: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    defaultValue : 0,
    },
    TitunManufacturing: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    defaultValue : 0,

    },
    QuantumTelecom: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    defaultValue : 0,
    },
    KickdonaldsFoods: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
    defaultValue : 0,
    },
    ZiplaPharmaceuticals: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    HorizonElectric: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    VelosityMotors: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    CTpexChemicals: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
        defaultValue : 0,
    },
    AlphaElectronics: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    KicroKaxCommunications: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
        defaultValue : 0,
    },
    AquaDynamicsCorp: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    OceanXTechnologies: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    // BuySmartRetail: {
    //   type: datatypes.INTEGER,
    //   validate: {
    //     min: 0,
    //   },
    // },
    MarineTechInnovations: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    BlueWaveSystems: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
        defaultValue : 0,
    },
    SeaventureTechnologies: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    TideInnovations: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    DeepCurrentRobotics: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue : 0,
    },
    Wallet: {
      type: datatypes.INTEGER,
      validate: {
        min: 0,
      },
        defaultValue : 0,
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
