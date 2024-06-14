import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reliji_trash_care'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

export default db;

