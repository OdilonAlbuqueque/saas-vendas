import XLSX from 'xlsx';

// Simular dados de vendas
const niboData = [
  {
    "Tipo de transação": "Lançamento",
    "Nome do contato": "Stone",
    "Descrição": "Smart Ton Black",
    "Categoria": "Receita com Vendas",
    "Valor": 270.00,
    "Vencimento": new Date(2026, 3, 10),
    "Previsto para": new Date(2026, 3, 10),
    "Competência": new Date(2026, 2, 4),
    "Centro de custo": "Loja 1",
    "Tipo de contato": "Cliente",
    "Anotação": "Entrega"
  },
  {
    "Tipo de transação": "Lançamento",
    "Nome do contato": "Stone",
    "Descrição": "T3 Ton Max",
    "Categoria": "Receita com Vendas",
    "Valor": 260.00,
    "Vencimento": new Date(2026, 3, 10),
    "Previsto para": new Date(2026, 3, 10),
    "Competência": new Date(2026, 2, 4),
    "Centro de custo": "Loja 2",
    "Tipo de contato": "Cliente",
    "Anotação": "Retirada"
  }
];

// Preparar dados para o Excel
const excelData = niboData.map((row) => ({
  'Tipo de transação': row['Tipo de transação'],
  'Nome do contato': row['Nome do contato'],
  'Descrição': row['Descrição'],
  'Categoria': row['Categoria'],
  'Valor': row['Valor'],
  'Vencimento': row['Vencimento'].toISOString().split('T')[0],
  'Previsto para': row['Previsto para'].toISOString().split('T')[0],
  'Competência': row['Competência'].toISOString().split('T')[0],
  'Centro de custo': row['Centro de custo'],
  'Tipo de contato': row['Tipo de contato'],
  'Anotação': row['Anotação'],
}));

// Criar workbook e adicionar dados
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(excelData);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Vendas');

// Converter para buffer e depois para base64
const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
const base64 = buffer.toString('base64');

console.log('✅ Exportação simulada com sucesso!');
console.log('Arquivo:', `exportacao-nibo-${new Date().toISOString().split('T')[0]}.xlsx`);
console.log('Tamanho:', buffer.length, 'bytes');
console.log('Base64 (primeiros 50 chars):', base64.substring(0, 50));
console.log('Número de linhas:', excelData.length);

// Testar conversão de volta
const binaryString = Buffer.from(base64, 'base64').toString('binary');
console.log('✅ Conversão base64 -> binary funcionou!');
console.log('Tamanho do binary string:', binaryString.length);
