import XLSX from 'xlsx';

// Dados de teste
const testData = [
  {
    'Tipo de transação': 'Lançamento',
    'Nome do contato': 'Stone',
    'Descrição': 'Smart Ton Black',
    'Categoria': 'Receita com Vendas',
    'Valor': 270.00,
    'Vencimento': '2026-04-10',
    'Previsto para': '2026-04-10',
    'Competência': '2026-03-04',
    'Centro de custo': 'Loja 1',
    'Tipo de contato': 'Cliente',
    'Anotação': 'Entrega'
  }
];

// Criar workbook
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(testData);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Vendas');

// Converter para buffer
const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

console.log('Buffer criado com sucesso!');
console.log('Tipo:', typeof buffer);
console.log('Tamanho:', buffer.length, 'bytes');
console.log('É Buffer:', Buffer.isBuffer(buffer));

// Tentar converter para base64
const base64 = buffer.toString('base64');
console.log('Base64 (primeiros 50 chars):', base64.substring(0, 50));
