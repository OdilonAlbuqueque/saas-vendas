import bcryptjs from 'bcryptjs';

const password = '123456';
const hashedPassword = await bcryptjs.hash(password, 10);

console.log('Hash bcrypt para senha "123456":');
console.log(hashedPassword);
console.log('\nCopie este hash e execute o SQL abaixo:\n');

console.log(`-- Deletar usuário anterior`);
console.log(`DELETE FROM users WHERE email = 'odilon.albuquerque.neto@gmail.com';\n`);

console.log(`-- Criar novo usuário Odilon com role admin`);
console.log(`INSERT INTO users (openId, companyId, name, email, password, passwordSet, loginMethod, role, isActive) VALUES (`);
console.log(`  'odilon-super-admin-${Date.now()}',`);
console.log(`  1,`);
console.log(`  'Odilon Albuquerque',`);
console.log(`  'odilon.albuquerque.neto@gmail.com',`);
console.log(`  '${hashedPassword}',`);
console.log(`  true,`);
console.log(`  'local',`);
console.log(`  'admin',`);
console.log(`  true`);
console.log(`);\n`);

console.log(`-- Verificar usuário criado`);
console.log(`SELECT id, email, role, name FROM users WHERE email = 'odilon.albuquerque.neto@gmail.com';`);
