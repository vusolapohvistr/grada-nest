const database = process.env.NODE_ENV === 'test' ? 'gradanest' : 'gradanest';

module.exports = {
  'type': 'postgres',
  'host': 'localhost',
  'port': 5432,
  'username': 'grada',
  'password': '123qwe',
  'database': database,
  'synchronize': false,
  'logging': false,
  'entities': [
    'src/entity/**/*.ts',
  ],
  'migrations': [
    'src/migration/**/*.ts',
  ],
  'subscribers': [
    'src/subscriber/**/*.ts',
  ],
  'cli': {
    'entitiesDir': 'src/entity',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber',
  },
};
