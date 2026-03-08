// Gerar UUID simples
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const tenantId = generateUUID();
const tenantUserId = generateUUID();

console.log('=== Setup Tenant para Odilon ===\n');
console.log('Tenant ID:', tenantId);
console.log('Tenant User ID:', tenantUserId);
console.log('\nCopie e execute os seguintes comandos SQL:\n');

console.log(`-- 1. Criar tenant padrão`);
console.log(`INSERT INTO tenants (id, name, slug, email, phone, status, user_limit) VALUES (
  '${tenantId}',
  'Parceiros Ton',
  'parceiros-ton',
  'odilon.albuquerque.neto@gmail.com',
  '11999999999',
  'active',
  100
);\n`);

console.log(`-- 2. Associar Odilon como super_admin do tenant`);
console.log(`-- Nota: Substitua 1 pelo ID real do usuário Odilon no banco`);
console.log(`INSERT INTO tenant_users (id, tenantId, userId, role, status) VALUES (
  '${tenantUserId}',
  '${tenantId}',
  1,
  'super_admin',
  'active'
);\n`);

console.log(`-- 3. Verificar dados`);
console.log(`SELECT * FROM tenants WHERE id = '${tenantId}';`);
console.log(`SELECT * FROM tenant_users WHERE tenantId = '${tenantId}';`);
