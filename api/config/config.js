require('dotenv').config();

// Variables para DB
const dbUser = process.env.DB_USER || process.env.PGUSER;
const dbPassword = process.env.DB_PASS || process.env.PGPASSWORD;
const dbHost = process.env.DB_HOST_PG || process.env.PGHOST;
const dbName = process.env.DB_NAME_PG || process.env.PGDATABASE;
const dbPort = process.env.DB_PORT_PG || process.env.PGPORT || 5432;

// Construir URL de conexión si no hay DATABASE_URL
const dbUrl =
  process.env.DATABASE_URL ||
  `postgres://${encodeURIComponent(dbUser)}:${encodeURIComponent(dbPassword)}@${dbHost}:${dbPort}/${dbName}`;

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser,
  dbPassword,
  dbHost,
  dbName,
  dbPort,
  dbUrl
};

module.exports = { config };
