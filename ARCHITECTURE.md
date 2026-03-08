# Arquitetura do Sistema SaaS de Gestão de Vendas

## 1. Estrutura de Banco de Dados (Multi-empresa)

### Tabelas Principais:

#### `companies` - Empresas/Clientes do SaaS
- id (PK)
- name
- document (CNPJ)
- createdAt
- updatedAt

#### `users` - Usuários do Sistema
- id (PK)
- openId (OAuth)
- companyId (FK) - Isolamento por empresa
- name
- email
- role (admin | user)
- storeId (FK) - Loja fixa para usuários comuns
- createdAt
- updatedAt
- lastSignedIn

#### `stores` - Lojas da Empresa
- id (PK)
- companyId (FK)
- name
- location
- createdAt
- updatedAt

#### `machines` - Maquinetas Disponíveis
- id (PK)
- companyId (FK)
- name
- commissionValue (valor da comissão)
- isActive
- createdAt
- updatedAt

#### `salesOrigins` - Origens de Venda
- id (PK)
- companyId (FK)
- name
- createdAt
- updatedAt

#### `hashtagOrigins` - Origens de Hashtag
- id (PK)
- companyId (FK)
- name
- createdAt
- updatedAt

#### `sales` - Registro de Vendas
- id (PK)
- companyId (FK)
- userId (FK)
- serialNumber
- clientName
- clientDocument
- storeId (FK)
- machineId (FK)
- saleDate
- isDelivery
- deliveryValue (nullable)
- salesOriginId (FK)
- hashtagOriginId (FK)
- commissionValue (calculado)
- createdAt
- updatedAt

## 2. Fluxo de Autenticação

1. Login com usuário/senha (não OAuth, autenticação local)
2. Verificação de companyId do usuário
3. Isolamento automático de dados por companyId
4. Permissões baseadas em role (admin/user)

## 3. Regras de Negócio

- Usuários comuns veem apenas sua loja fixa
- Admins podem selecionar qualquer loja da empresa
- Dados isolados por companyId em todas as queries
- Comissão calculada automaticamente baseada na maquineta
- Data de venda padrão = hoje, editável dentro do mês vigente

## 4. Estrutura de Componentes Frontend

- DashboardLayout: Layout principal com sidebar
- LoginPage: Autenticação
- SalesPage: Registro de vendas
- SummaryPage: Resumo com estatísticas
- ReportsPage: Relatórios com filtros e exportação
- AdminPanel: Gerenciamento de cadastros

## 5. Endpoints tRPC

### Public
- auth.login
- auth.logout

### Protected (usuário comum)
- sales.create
- sales.list
- sales.getById
- summary.getStats
- reports.getFiltered

### Protected Admin
- admin.stores.list/create/update/delete
- admin.machines.list/create/update/delete
- admin.salesOrigins.list/create/update/delete
- admin.hashtagOrigins.list/create/update/delete
- admin.users.list/create/update/delete
