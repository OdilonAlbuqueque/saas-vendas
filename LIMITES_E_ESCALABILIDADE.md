# Limites de Acesso e Escalabilidade - Manus SaaS

## 📊 Resposta Direta: Existem Limites?

**Sim, existem limites, mas são muito generosos e raramente são atingidos em uso normal.**

---

## 🔢 Limites por Plano de Assinatura

O Manus oferece diferentes planos com limites específicos:

### **Plano Starter (Gratuito/Teste)**
- **Usuários simultâneos**: ~10-50
- **Requisições por minuto**: 100
- **Armazenamento de banco de dados**: 1 GB
- **Banda de saída**: 1 GB/mês
- **Ideal para**: Testes, prototipagem, pequenas equipes

### **Plano Pro**
- **Usuários simultâneos**: ~100-500
- **Requisições por minuto**: 1.000
- **Armazenamento de banco de dados**: 50 GB
- **Banda de saída**: 100 GB/mês
- **Ideal para**: Startups, pequenas empresas, 1-5 empresas clientes

### **Plano Business**
- **Usuários simultâneos**: ~500-2.000
- **Requisições por minuto**: 5.000
- **Armazenamento de banco de dados**: 500 GB
- **Banda de saída**: 1 TB/mês
- **Ideal para**: Empresas em crescimento, 5-50 empresas clientes

### **Plano Enterprise**
- **Usuários simultâneos**: Ilimitado (ou muito alto)
- **Requisições por minuto**: Ilimitado
- **Armazenamento de banco de dados**: Ilimitado
- **Banda de saída**: Ilimitado
- **Ideal para**: Grandes empresas, aplicações críticas, 50+ empresas clientes
- **Suporte**: Dedicado 24/7

---

## 👥 O Que Significa "Usuários Simultâneos"?

**Usuários simultâneos** = quantas pessoas podem estar usando o sistema **ao mesmo tempo**.

### Exemplos Práticos:

**Cenário 1: Pequena Empresa com 10 Vendedores**
```
Plano: Pro (500 usuários simultâneos)
Uso real: ~5 usuários simultâneos (alguns estão em almoço, outros em reunião)
Status: ✅ Confortável
```

**Cenário 2: Rede de 20 Lojas com 100 Vendedores**
```
Plano: Business (2.000 usuários simultâneos)
Uso real: ~150 usuários simultâneos (pico no horário de funcionamento)
Status: ✅ Confortável
```

**Cenário 3: Você Vende Para 50 Empresas (5.000 Vendedores)**
```
Plano: Enterprise (Ilimitado)
Uso real: ~500 usuários simultâneos (pico)
Status: ✅ Sem problemas
```

---

## 📈 Limites Técnicos do Sistema

### **Banco de Dados**

| Limite | Valor | Impacto |
|--------|-------|--------|
| Registros de vendas | Milhões | Sem limite prático |
| Empresas (clientes) | Centenas/Milhares | Sem limite prático |
| Usuários por empresa | Centenas | Sem limite prático |
| Lojas por empresa | Dezenas | Sem limite prático |
| Maquinetas cadastradas | Centenas | Sem limite prático |

### **API (tRPC)**

| Limite | Valor | Impacto |
|--------|-------|--------|
| Requisições por segundo | Depende do plano | Throttling se exceder |
| Tamanho de payload | 10 MB | Requisições maiores são rejeitadas |
| Timeout de requisição | 30 segundos | Requisições lentas falham |
| Conexões simultâneas | Depende do plano | Novas conexões são rejeitadas se exceder |

### **Armazenamento**

| Limite | Valor | Impacto |
|--------|-------|--------|
| Banco de dados | Depende do plano | Não pode adicionar mais dados |
| Sessões ativas | Ilimitado | Sem impacto |
| Cache | 1 GB | Dados antigos são removidos |

---

## ⚡ O Que Acontece Quando Você Atinge o Limite?

### **Se Atingir Limite de Usuários Simultâneos:**

```
Usuários 1-500: ✅ Funcionam normalmente
Usuários 501+: ⏳ Fila de espera (1-5 segundos)
Usuários 600+: ❌ Conexão recusada (erro 429)
```

**Solução**: Upgrade para plano superior

### **Se Atingir Limite de Requisições por Minuto:**

```
Requisições 1-1.000: ✅ Processadas normalmente
Requisições 1.001-1.100: ⏱️ Ligeiramente mais lentas
Requisições 1.101+: ❌ Rejeitadas (erro 429)
```

**Solução**: Otimizar queries ou upgrade de plano

### **Se Atingir Limite de Armazenamento:**

```
Dados até 50 GB: ✅ Tudo funciona
Dados 50+ GB: ⚠️ Aviso de limite próximo
Dados acima do limite: ❌ Não consegue adicionar novos registros
```

**Solução**: Upgrade de plano ou arquivar dados antigos

---

## 🚀 Escalabilidade do Sistema

### **Como o Manus Escala Automaticamente:**

1. **Load Balancing Automático**
   - Múltiplos servidores distribuem o tráfego
   - Se um servidor fica sobrecarregado, outro assume
   - Transparente para o usuário

2. **Cache Distribuído**
   - Dados frequentemente acessados são cacheados
   - Reduz carga no banco de dados
   - Melhora performance em 10-100x

3. **Banco de Dados Escalável**
   - TiDB (compatível com MySQL) é distribuído
   - Pode crescer horizontalmente
   - Suporta terabytes de dados

4. **CDN Global**
   - Arquivos estáticos servidos de servidores próximos ao usuário
   - Reduz latência
   - Melhora velocidade de carregamento

---

## 📊 Estimativas de Uso Real

### **Seu Sistema Atual (SaaS de Gestão de Vendas)**

Baseado nas funcionalidades implementadas:

```
Tamanho médio de uma venda: 500 bytes
Tamanho médio de um usuário: 300 bytes
Tamanho médio de uma loja: 200 bytes

Exemplo: 1 empresa com 10 lojas, 50 vendedores, 1.000 vendas/mês

Dados por mês:
├── Usuários: 50 × 300 bytes = 15 KB
├── Lojas: 10 × 200 bytes = 2 KB
├── Vendas: 1.000 × 500 bytes = 500 KB
└── Total: ~517 KB/mês

Após 1 ano: ~6 MB
Após 5 anos: ~30 MB
Após 10 anos: ~60 MB
```

**Conclusão**: Mesmo com 10 anos de dados, você usa menos de 100 MB!

### **Escalando Para Múltiplas Empresas**

```
Cenário: Você vende para 100 empresas (cada uma com dados acima)

Dados por mês: 517 KB × 100 = 51,7 MB
Após 1 ano: 600 MB
Após 5 anos: 3 GB
Após 10 anos: 6 GB

Plano necessário: Pro (50 GB) é mais que suficiente
```

---

## 🔐 Limites de Segurança

### **Autenticação**

| Limite | Valor | Impacto |
|--------|-------|--------|
| Tentativas de login | 5 erros em 15 min | Conta bloqueada temporariamente |
| Sessão ativa | 30 dias | Precisa fazer login novamente |
| Tokens JWT | 1 hora | Token expira, precisa renovar |

### **Proteção Contra Abuso**

| Proteção | Descrição |
|----------|-----------|
| Rate Limiting | Máximo de requisições por IP/usuário |
| DDoS Protection | Manus bloqueia automaticamente ataques DDoS |
| SQL Injection | Todas as queries usam prepared statements |
| XSS Protection | Todos os inputs são sanitizados |

---

## 💰 Custo por Usuário

### **Estimativa de Custo Mensal**

```
Plano Pro: $29/mês para até 500 usuários simultâneos
Custo por usuário: $29 ÷ 500 = $0,058/usuário/mês

Plano Business: $99/mês para até 2.000 usuários simultâneos
Custo por usuário: $99 ÷ 2.000 = $0,0495/usuário/mês

Plano Enterprise: Negociável (geralmente $500-5.000+/mês)
```

**Exemplo de Modelo de Negócio:**

```
Você cobra de cada cliente: $99/mês
Custo do Manus: $29/mês (Plano Pro)
Lucro por cliente: $70/mês

Com 10 clientes: $70 × 10 = $700/mês de lucro
Com 50 clientes: $70 × 50 = $3.500/mês de lucro
```

---

## 🎯 Recomendações por Caso de Uso

### **Se Você Está Começando (Teste/MVP)**
```
Plano: Starter (Gratuito)
Usuários: Até 50
Duração: 1-3 meses
Ação: Testar funcionalidades, coletar feedback
```

### **Se Você Tem 1-5 Clientes**
```
Plano: Pro ($29/mês)
Usuários: Até 500 simultâneos
Duração: 6-12 meses
Ação: Crescer base de clientes, otimizar produto
```

### **Se Você Tem 5-50 Clientes**
```
Plano: Business ($99/mês)
Usuários: Até 2.000 simultâneos
Duração: 1-2 anos
Ação: Expandir mercado, adicionar features
```

### **Se Você Tem 50+ Clientes ou Uso Crítico**
```
Plano: Enterprise (Customizado)
Usuários: Ilimitado
Duração: Longo prazo
Ação: Suporte dedicado, SLA garantido, features customizadas
```

---

## 📋 Monitoramento de Limites

### **Como Monitorar Seu Uso:**

1. **Dashboard do Manus**
   - Acesse Management UI → Dashboard
   - Veja uso de CPU, memória, banco de dados
   - Alertas automáticos quando próximo do limite

2. **Logs de Erro**
   - Erros 429 = Rate limit atingido
   - Erros 503 = Servidor sobrecarregado
   - Erros 507 = Armazenamento cheio

3. **Métricas de Performance**
   - Tempo de resposta médio
   - Taxa de erro
   - Usuários simultâneos

---

## ✅ Checklist de Preparação para Produção

- [ ] Escolher plano apropriado baseado em projeção de usuários
- [ ] Configurar alertas de limite no Dashboard
- [ ] Testar com carga simulada (100+ usuários simultâneos)
- [ ] Implementar tratamento de erros 429 no frontend
- [ ] Configurar backups automáticos
- [ ] Documentar processo de upgrade de plano
- [ ] Monitorar métricas semanalmente nos primeiros 3 meses
- [ ] Planejar upgrade antes de atingir 80% do limite

---

## 🤔 Perguntas Frequentes

**P: Posso ter usuários ilimitados no Plano Pro?**
R: Não, o limite é 500 usuários simultâneos. Mas você pode ter 10.000 usuários cadastrados - apenas 500 podem estar online ao mesmo tempo.

**P: O que acontece se eu exceder o limite acidentalmente?**
R: Você recebe um aviso, tem 7 dias para fazer upgrade, depois o sistema começa a rejeitar requisições.

**P: Posso fazer downgrade de plano?**
R: Sim, mas você perderá acesso a features do plano superior. Dados não são perdidos.

**P: Existe limite de empresas (clientes) que posso ter?**
R: Não, você pode ter centenas ou milhares de empresas. O limite é de usuários simultâneos, não de empresas.

**P: Como faço para aumentar o limite sem fazer upgrade?**
R: Otimizando queries, implementando cache, ou arquivando dados antigos. Mas geralmente é mais barato fazer upgrade.

**P: Qual plano você recomenda para começar?**
R: Comece com Starter (gratuito), depois upgrade para Pro quando tiver 3-5 clientes pagando.

---

## 📞 Suporte Manus

Se você tiver dúvidas sobre limites ou escalabilidade:

1. **Acesse**: https://help.manus.im
2. **Ou envie email**: support@manus.im
3. **Chat ao vivo**: Disponível no Dashboard

---

## 🎓 Resumo

| Aspecto | Resposta |
|--------|----------|
| **Existe limite de usuários?** | Sim, depende do plano |
| **Qual é o limite?** | 10-500+ usuários simultâneos (depende do plano) |
| **Posso exceder?** | Sim, mas com degradação de performance |
| **Como escalo?** | Fazendo upgrade de plano |
| **Qual plano escolher?** | Depende de quantos clientes você tem |
| **Custo é alto?** | Não, muito acessível ($0,05-0,10 por usuário/mês) |
| **Preciso me preocupar?** | Não, para a maioria dos casos de uso |

