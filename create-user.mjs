import bcryptjs from 'bcryptjs';
import mysql from 'mysql2/promise';

const password = '123456789';
const hashedPassword = await bcryptjs.hash(password, 10);

console.log('Hashed password:', hashedPassword);

// Conectar ao banco
const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'saas_vendas',
  port: process.env.DB_PORT || 3306,
});

try {
  // Deletar usuário existente
  await connection.execute(
    'DELETE FROM users WHERE email = ?',
    ['odilon.albuquerque.neto@gmail.com']
  );
  console.log('Usuário anterior deletado');

  // Inserir novo usuário
  const [result] = await connection.execute(
    `INSERT INTO users (openId, companyId, name, email, password, passwordSet, loginMethod, role, isActive) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      'odilon-openid-' + Date.now(),
      1, // companyId padrão
      'Odilon Albuquerque',
      'odilon.albuquerque.neto@gmail.com',
      hashedPassword,
      true,
      'local',
      'admin',
      true,
    ]
  );
  console.log('Usuário criado com sucesso:', result.insertId);

  // Verificar
  const [rows] = await connection.execute(
    'SELECT id, email, role, name FROM users WHERE email = ?',
    ['odilon.albuquerque.neto@gmail.com']
  );
  console.log('Usuário no banco:', rows[0]);
} catch (error) {
  console.error('Erro:', error.message);
} finally {
  await connection.end();
}
