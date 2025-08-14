require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbHost: process.env.DB_HOST_PG,
  dbName: process.env.DB_NAME_PG,
  dbPort: process.env.DB_PORT_PG || 5432,
  dbUrl: process.env.DATABASE_URL
};

module.exports = { config };
