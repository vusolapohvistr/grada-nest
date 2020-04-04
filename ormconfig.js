require('dotenv').config();

console.log(process.env.NODE_ENV);
let entities = ['dist/src/entity/**/*.js'];
let migrations = ['dist/src/migration/**/*.js'];
let subscribers = ['dist/src/subscriber/**/*.js'];
if (process.env.NODE_ENV === 'test') {
  entities = ['src/entity/**/*.ts'];
  migrations = ['src/migration/**/*.ts'];
  subscribers = ['src/subscriber/**/*.ts'];
}

module.exports = {
  'type': 'postgres',
  'host': process.env.DATABASE_HOST,
  'port': 5432,
  'username': process.env.DATABASE_USERNAME,
  'password': process.env.DATABASE_PASSWORD,
  'database': process.env.DATABASE_NAME,
  'synchronize': false,
  'entities': entities,
  'migrations': migrations,
  'subscribers': subscribers,
  'cli': {
    'entitiesDir': 'src/entity',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber',
  },
  logging: ["query", "error"]
};
