import mysql from 'mysql2';

//Parametros de la conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'skins',
};

export const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL.');
});

// export default db;