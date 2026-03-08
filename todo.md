# Project TODO - SaaS Gestão de Vendas

## Database & Backend Setup
- [x] Configurar tabelas do banco de dados (companies, users, stores, machines, etc)
- [x] Implementar autenticação local (usuário/senha)
- [x] Criar isolamento de dados por companyId
- [x] Implementar procedures tRPC para autenticação
- [x] Implementar procedures tRPC para vendas (create, list, getById)
- [x] Implementar procedures tRPC para resumo (getStats)
- [x] Implementar procedures tRPC para relatórios (getFiltered)
- [x] Implementar admin procedures para lojas
- [x] Implementar admin procedures para maquinetas
- [x] Implementar admin procedures para origens de venda
- [x] Implementar admin procedures para origens de hashtag
- [ ] Implementar admin procedures para usuários

## Frontend - Layout & Navigation
- [x] Criar página de login com autenticação local
- [x] Criar DashboardLayout com sidebar navigation
- [x] Implementar navegação: Início, Resumo de Vendas, Relatórios
- [x] Implementar menu admin (visível apenas para admins)
- [ ] Criar componente de perfil/logout no header

## Frontend - Tela de Registro de Vendas
- [x] Criar formulário com campos: Serial Number, Nome Cliente, Documento, Loja, Maquineta
- [x] Adicionar campo Data da Venda (padrão hoje, editável)
- [x] Implementar campo Entrega com valor condicional
- [x] Adicionar campos Origem da Venda e Origem da Hashtag
- [x] Validação de campos obrigatórios
- [x] Cálculo automático de comissão
- [x] Feedback visual de erros
- [x] Integração com API de vendas

## Frontend - Tela de Resumo de Vendas
- [x] Exibir total de vendas
- [x] Exibir vendas por loja
- [x] Exibir vendas por maquineta
- [x] Exibir vendas por período
- [x] Implementar filtros de data
- [x] Criar gráficos de estatísticas

## Frontend - Tela de Relatórios
- [x] Criar tabela de vendas com filtros
- [x] Implementar filtro por data
- [x] Implementar filtro por loja
- [x] Implementar filtro por maquineta
- [x] Implementar filtro por origem
- [x] Exportação em CSV
- [ ] Exportação em Excel

## Frontend - Painel Administrativo
- [x] Criar página de gerenciamento de lojas
- [x] Criar página de gerenciamento de maquinetas
- [x] Criar página de gerenciamento de origens de venda
- [x] Criar página de gerenciamento de origens de hashtag
- [ ] Criar página de gerenciamento de usuários
- [x] Implementar CRUD para cada cadastro

## Design & UX
- [x] Definir paleta de cores elegante
- [x] Implementar design responsivo
- [x] Otimizar para uso diário
- [x] Adicionar ícones e visual polish
- [ ] Testes de usabilidade

## Testing & Deployment
- [x] Testes unitários das procedures
- [ ] Testes de integração
- [ ] Testes de validação de formulários
- [x] Verificação de isolamento de dados
- [ ] Testes de performance
- [ ] Deploy e verificação final

## Bugs & Fixes
- [x] Corrigir acesso à página de login (redirecionamento automático bloqueando login)
- [x] Implementar seed de dados iniciais para teste (empresa, lojas, maquinetas, origens)
- [x] Corrigir procedimento de login para criar cookie JWT de sessão

## Issues Reportados pelo Usuário
- [x] Page 2 estava retornando erro 404 - corrigido para apontar para /summary (Resumo de Vendas)
- [x] Atualizado menu de navegação com nomes descritivos (Início, Resumo de Vendas, Relatórios, Configurações)

## Novos Requisitos - Iteração 2
- [x] Corrigir página de Relatórios que não estava funcionando
- [x] Adicionar filtro de loja no Resumo de Vendas (mostrar todas ou uma loja específica)
- [x] Implementar CRUD completo nas Configurações (editar e excluir para Lojas, Maquinetas, Origens, Hashtags)
- [x] Adicionar filtros múltiplos nos Relatórios (loja, vendedor, maquineta, origem, cliente, documento, serial)
- [x] Implementar exportação CSV com filtros aplicados
- [x] Permitir combinação de múltiplos filtros nos Relatórios

## Bugs - Iteração 2
- [x] Corrigir erro no componente Select do Relatórios - valor vazio não é permitido
- [x] Corrigir erro no componente Select do Resumo de Vendas - valor vazio não é permitido

## Alterações Solicitadas - Iteração 3
- [x] Filtrar Resumo de Vendas para mostrar apenas dados do mês atual
- [x] Adicionar seletor de mês anterior nos Relatórios com auto-preenchimento de datas
- [x] Adicionar botão "Filtrar" nos Relatórios para aplicar filtros de forma controlada

## Bugs/Features Pendentes - Iteração 9
- [x] Implementar edição de maquinetas (e outros cadastros) nas Configurações com botão Edit

## Bugs/Features Pendentes - Iteração 10
- [x] Corrigir cálculo e exibição de comissões no Resumo de Vendas
- [x] Corrigir cálculo e exibição de comissões nos Relatórios
- [x] Adicionar totalizações de comissões por loja nos Relatórios
- [x] Atualizar gráficos para mostrar valores em R$ ao invés de contagem

## Bugs/Features Pendentes - Iteração 11 (Controle de Acesso)
- [x] Criar tela de login com autenticação de usuário e senha
- [x] Implementar proteção de rotas baseada em perfil (role-based access)
- [x] Atualizar menu lateral para mostrar apenas módulos permitidos por perfil
- [x] Ocultar valores de comissão/faturamento para vendedores
- [x] Criar componente ProtectedRoute para proteção de rotas
- [x] Testar acesso de admin vs vendedor em todas as páginas

## Bugs/Features Pendentes - Iteração 12 (Gerenciamento de Usuários)
- [x] Criar procedures tRPC para gerenciamento de usuários (create, list, update, delete)
- [x] Criar componente de gerenciamento de usuários com tabela e formulários
- [x] Integrar gerenciamento de usuários na página Admin
- [x] Permitir criar usuários com email, senha e perfil (admin/vendedor)
- [x] Permitir editar perfil e status de usuários
- [x] Permitir deletar usuários
- [x] Testar CRUD de usuários (8 testes passando)

## Bugs/Features Pendentes - Iteração 13 (Vinculação de Usuário a Loja)
- [x] Atualizar schema para adicionar storeId obrigatório em usuários
- [x] Atualizar procedures tRPC para vincular usuário a loja
- [x] Atualizar UsersManagement para editar loja do vendedor
- [x] Atualizar SalesForm para congelar loja do vendedor
- [x] Atualizar Relatórios para filtrar por usuário com todas as lojas
- [x] Testar vinculação de loja (vendedor só vê sua loja, admin vê todas)

## Bugs/Features Pendentes - Iteração 14 (Autenticação e Resumo para Vendedores)
- [x] Implementar autenticação com validação de senha correta
- [x] Criar fluxo de primeiro login para definir senha
- [x] Ocultar valores no Resumo de Vendas para vendedores
- [x] Testar autenticação com senha correta
- [x] Testar primeiro login e definição de senha

## Bugs/Features Pendentes - Iteração 15 (Opções de Login)
- [x] Adicionar opções de "Criar Senha" e "Recuperar Senha" na tela de login
- [x] Criar usuário admin com senha pré-definida (admin@vendas.com / Admin@123)
- [x] Testar login com novo usuário admin

## Bugs/Features Pendentes - Iteração 16 (Fluxo de Recuperação de Senha)
- [x] Criar procedures tRPC para recuperação de senha
- [x] Criar página de recuperação de senha (email)
- [x] Criar página de definição de senha com confirmação
- [x] Integrar fluxo na tela de login
- [x] Testar fluxo completo de recuperação

## Bugs/Features Pendentes - Iteração 17 (Cancelamento de Venda e Acesso do Vendedor)
- [x] Adicionar campos de cancelamento no schema de vendas
- [x] Criar procedure tRPC para cancelar venda
- [x] Corrigir acesso do vendedor às suas vendas
- [x] Adicionar UI de cancelamento na página de vendas
- [x] Atualizar cálculos de faturamento para excluir canceladas
- [x] Testar cancelamento e acesso do vendedor

## Bugs/Features Pendentes - Iteração 18 (Compactar SalesHistory)
- [x] Adicionar contador de vendas no SalesHistory
- [x] Diminuir tamanho de letras e espaçamento
- [x] Testar layout compacto

## Bugs/Features Pendentes - Iteração 19 (Filtro de Vendas Canceladas)
- [x] Adicionar filtro para visualizar vendas canceladas no Resumo de Vendas
- [x] Testar filtro
- [x] Adicionar listagem com detalhes (loja, vendedor, maquineta)

## Bugs/Features Pendentes - Iteração 20 (Design Visual - Parceiros Ton)
- [x] Pesquisar Parceiros Ton e obter identidade visual
- [x] Integrar logo de Parceiros Ton na navegação
- [x] Atualizar paleta de cores para verde #00D700
- [x] Refinar tipografia, espaçamento e componentes
- [x] Testar visual em todas as páginas

## Bugs/Features Pendentes - Iteração 21 (Contas a Pagar/Receber - Nibo)
- [ ] Criar schema de contas a pagar (payable_accounts)
- [ ] Criar schema de contas a receber (receivable_accounts)
- [ ] Implementar procedures tRPC para CRUD de contas a pagar
- [ ] Implementar procedures tRPC para CRUD de contas a receber
- [ ] Criar página de Contas a Pagar com filtros (período, nome, descrição, valor, categoria)
- [ ] Criar página de Contas a Receber com filtros (período, nome, descrição, valor, categoria)
- [ ] Implementar tabela com colunas: Vencimento, Competência, Nome, Descrição, Categoria, Valor, Status
- [ ] Adicionar filtro de período com seletor de data inicial e final
- [ ] Adicionar filtro por categoria
- [ ] Implementar cálculo de totais por categoria
- [ ] Adicionar abas de filtro (Competência, Caixa, etc)
- [ ] Testar funcionalidades de Contas a Pagar/Receber


## Bugs/Features Pendentes - Iteração 22 (Design RetailPro/Nibo)
- [x] Analisar design do RetailPro como referência
- [x] Atualizar página de login com design Nibo (fundo cinza, card branco, logo em container azul)
- [x] Refinar paleta de cores para azul escuro (#003DA5) como primária
- [x] Atualizar DashboardLayout com design Nibo
- [x] Adicionar estilos customizados para componentes
- [x] Testar visual em todas as páginas

## Bugs/Features Pendentes - Iteração 23 (Multi-Tenant & Administração)
- [ ] Criar tabelas de administração (tenants, tenant_users, tenant_roles)
- [ ] Implementar isolamento de dados por tenant em todas as queries
- [ ] Criar painel admin central para gerenciar empresas
- [ ] Implementar gestão de empresas (criar, editar, deletar, ativar/desativar)
- [ ] Implementar gestão de usuários por empresa
- [ ] Adicionar autenticação multi-tenant (usuário faz login e acessa empresa)
- [ ] Implementar autorização baseada em role (super_admin, admin, user, vendor)
- [ ] Criar página de seleção de empresa no login
- [ ] Validar acesso por tenant em todas as procedures tRPC
- [ ] Testar isolamento de dados entre empresas
- [ ] Testar segurança e acesso cruzado

## Bugs/Features Pendentes - Iteração 24 (Correção de Acesso ao Painel Admin)
- [x] Alterar rota /admin-panel para aceitar role "admin"
- [x] Alterar menu para mostrar "Painel Admin" para role "admin"
- [x] Modificar AdminPanel.tsx para permitir acesso a usuários admin
- [x] Criar tenant padrão "Parceiros Ton" no banco
- [x] Associar Odilon como super_admin do tenant
- [x] Criar usuario Odilon com email odilon.albuquerque.neto@gmail.com e senha 123456
- [ ] Testar login com Odilon e acesso ao Painel Admin
- [ ] Implementar seleção de tenant no login
- [ ] Testar isolamento de dados por tenant
- [x] BUG: Sidebar desaparece em Painel Admin, Contas a Pagar e Contas a Receber
- [x] BUG: Acesso Negado ao Painel Admin - deve ser apenas para Odilon (odilon.albuquerque.neto@gmail.com)
- [x] BUG: Erro "Super admin access required" ao acessar Painel Admin
- [ ] Adicionar seleção de módulos para cada empresa
- [ ] Transformar lista de empresas em cards com gerenciamento de usuários
- [x] BUG: Não consegue editar empresas no Painel Admin
- [x] BUG: Não consegue clicar no ícone de gerenciar usuários (bonequinho)
- [x] BUG: Não consegue clicar nas empresas na guia "Limites de Usuários" para definir limites

## Feature: Multi-tenant com Schemas Separados

- [x] Implementar criação de schema separado para cada empresa
- [x] Armazenar informação do schema na tabela de tenants
- [x] Testar isolamento de dados por schema (testes passando)
- [ ] Criar usuário padrão admin para cada empresa automaticamente
- [ ] Implementar seleção de schema no contexto da aplicação
- [ ] Migrar "Parceiros Ton" para schema separado
- [ ] BUG: Não consegue criar usuários para as empresas no Painel Admin
