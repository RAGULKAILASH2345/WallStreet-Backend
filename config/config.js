module.exports = {
  "development": {
    "username": "root",
    "password": "{123456}",
    "database": "wallstreet",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql",
    "define": {
      "freezeTableName": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "DB_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    },
    "define": {
      "freezeTableName": true // see https://sequelize.org/docs/v6/core-concepts/model-basics/#enforcing-the-table-name-to-be-equal-to-the-model-name
    }
  }
}
