import { createConnection } from "mysql2";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "electroStore",
// };

export const db = createConnection(dbConfig);

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database");
  }
});

export default db;
