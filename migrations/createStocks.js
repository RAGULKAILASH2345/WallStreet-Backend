'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stocks', {
            email: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.STRING,

            },
            Aquashop: {
                type: Sequelize.INTEGER
            },
            RazerElectronics: {
                type: Sequelize.INTEGER
            },
            BVInfra: {
                type: Sequelize.INTEGER
            },
            GoalEnterprise: {
                type: Sequelize.INTEGER
            },
            MedPharma: {
                type: Sequelize.INTEGER
            },
            Paradigm: {
                type: Sequelize.INTEGER
            },
            VIFinance: {
                type: Sequelize.INTEGER
            },
            ForgeTech: {
                type: Sequelize.INTEGER
            },
            Wallet: {
                type: Sequelize.INTEGER
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
