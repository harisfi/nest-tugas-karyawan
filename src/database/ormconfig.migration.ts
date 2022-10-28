import databaseConfig from 'src/configs/database.config';

module.exports = {
  host: databaseConfig().host,
  port: databaseConfig().port,
  type: databaseConfig().type,
  username: databaseConfig().username,
  password: databaseConfig().password,
  database: databaseConfig().database,
  synchronize: databaseConfig().synchronize,
  entities: databaseConfig().entities,
  migrations: ['src/database/migrations/*.ts'],
  cli: { migrationsDir: 'src/database/migrations' },
};
