'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stocks', {
            email: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.STRING,

            },
            ABCIndustries: {
                type:datatypes.INTEGER,
            },
            DEFTechLtd: {
                type:datatypes.INTEGER,
            },
            ClindaPharmaceuticals: {
                type:datatypes.INTEGER,
            },
            GlobalEnergyCorp: {
                type:datatypes.INTEGER,
            },
            // TitanSportswear: {
            //     type:datatypes.INTEGER,
            // },
            LMNMotors: {
                type:datatypes.INTEGER,
            },
            PDFSoftwareSolutions: {
                type:datatypes.INTEGER,
            },
            EclipseSolarTechnologies: {
                type:datatypes.INTEGER,
            },
            SunshineRetailers: {
                type:datatypes.INTEGER,
            },
            TitunManufacturing: {
                type:datatypes.INTEGER,
            },
            QuantumTelecom: {
                type:datatypes.INTEGER,
            },
            KickdonaldsFoods: {
                type:datatypes.INTEGER,
            },
            ZiplaPharmaceuticals: {
                type:datatypes.INTEGER,
            },
            HorizonElectric: {
                type:datatypes.INTEGER,
            },
            VelosityMotors: {
                type:datatypes.INTEGER,
            },
            CTpexChemicals: {
                type:datatypes.INTEGER,
            },
            AlphaElectronics: {
                type:datatypes.INTEGER,
            },
            KicroKaxCommunications: {
                type:datatypes.INTEGER,
            },
            AquaDynamicsCorp: {
                type:datatypes.INTEGER,
            },
            OceanXTechnologies: {
                type:datatypes.INTEGER,
            },
            MarineTechInnovations: {
                type:datatypes.INTEGER,
            },
            BlueWaveSystems: {
                type:datatypes.INTEGER,
            },
            SeaventureTechnologies: {
                type:datatypes.INTEGER,
            },
            TideInnovations: {
                type:datatypes.INTEGER,
            },
            DeepCurrentRobotics: {
                type:datatypes.INTEGER,
            },
            Wallet: {
                type:datatypes.INTEGER,
            },
            profit:{
                type: datatypes.DOUBLE,
                defaultValue: 0.0,
                validate:{
                  min: 0.0,
                },
                check: {
                  priceGreaterThanZero: {
                    args: [0],
                    msg: 'Price must be greater than zero',
                  },
                },
              },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('stocks');
    }
};
