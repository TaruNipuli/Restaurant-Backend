import mysql from 'mysql2';
import 'dotenv/config';  // loads the .env file and makes its variables available in process.env

const pool = mysql.createPool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("config",pool)

const promisePool = pool.promise();

export default promisePool;