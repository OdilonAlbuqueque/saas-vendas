# Guia Completo - Conectar Domínio Personalizado

## 📌 Situação Atual

Seu sistema está hospedado em:
```
https://vendassaas-sqriuhk4.manus.space
```

Este é um domínio **automático do Manus** (subdomínio gratuito). Você quer mudar para seu próprio domínio, como:
```
https://vendas.suaempresa.com
https://sistema.minhaempresa.com.br
```

---

## 🎯 Opções Disponíveis

### **Opção 1: Usar Domínio Existente (Recomendado - Mais Fácil)**

Se você **já possui um domínio** (ex: suaempresa.com):

#### Passo 1: Acessar Management UI do Manus

1. Abra o painel de gerenciamento do seu projeto
2. Clique em **"Settings"** (engrenagem)
3. Selecione **"Domains"** no menu lateral

#### Passo 2: Adicionar Domínio Personalizado

1. Clique em **"Add Custom Domain"**
2. Digite seu domínio: `vendas.suaempresa.com` (ou qualquer subdomínio)
3. Clique em **"Next"**

#### Passo 3: Configurar DNS

O Manus mostrará instruções de DNS. Você terá **2 opções**:

**Opção A: CNAME (Recomendado)**
```
Tipo: CNAME
Nome: vendas
Valor: vendassaas-sqriuhk4.manus.space
TTL: 3600 (ou automático)
```

**Opção B: A Record (Se CNAME não funcionar)**
```
Tipo: A
Nome: vendas
Valor: [IP fornecido pelo Manus]
TTL: 3600 (ou automático)
```

#### Passo 4: Atualizar DNS no Seu Registrador

Você precisa atualizar o DNS onde seu domínio está registrado. Exemplos:

**Se registrado na Registro.br:**
1. Acesse https://www.registro.br
2. Faça login
3. Vá para "Meus domínios"
4. Clique no seu domínio
5. Selecione "Editar zona"
6. Adicione o registro CNAME fornecido pelo Manus
7. Salve as mudanças

**Se registrado na GoDaddy:**
1. Acesse https://www.godaddy.com
2. Faça login
3. Vá para "Meus produtos"
4. Clique no seu domínio
5. Selecione "Gerenciar DNS"
6. Adicione o registro CNAME
7. Salve as mudanças

**Se registrado na NameCheap:**
1. Acesse https://www.namecheap.com
2. Faça login
3. Vá para "Dashboard"
4. Clique em "Manage" ao lado do domínio
5. Vá para "Advanced DNS"
6. Adicione o registro CNAME
7. Salve as mudanças

**Se registrado em outro lugar:**
- Procure por "Gerenciar DNS" ou "DNS Settings"
- Adicione o registro CNAME fornecido pelo Manus
- Salve as mudanças

#### Passo 5: Aguardar Propagação

O DNS leva **5 minutos a 48 horas** para propagar. Durante esse tempo:
- Seu domínio antigo ainda funciona
- Seu novo domínio pode estar indisponível
- Não há downtime

#### Passo 6: Verificar Conexão

No Management UI do Manus:
1. Clique em **"Verify Domain"**
2. Aguarde a verificação
3. Quando aparecer ✅, seu domínio está conectado!

---

### **Opção 2: Comprar Novo Domínio (Se Não Tiver)**

Se você **não possui um domínio**, o Manus permite comprar diretamente:

#### Passo 1: Acessar Compra de Domínio

1. Abra Management UI → Settings → Domains
2. Clique em **"Buy New Domain"**

#### Passo 2: Escolher Domínio

1. Digite o domínio desejado: `vendas.com.br`, `minhasistema.com`, etc.
2. Clique em **"Search"**
3. Veja disponibilidade e preço
4. Clique em **"Buy"**

#### Passo 3: Pagar

1. Preencha informações de pagamento
2. Confirme a compra
3. Domínio é registrado automaticamente

#### Passo 4: Conectar ao Seu Sistema

1. Clique em **"Connect to Project"**
2. Selecione seu projeto
3. Clique em **"Connect"**
4. Pronto! Seu domínio está conectado

**Vantagem**: Tudo é feito no Manus, sem precisar configurar DNS manualmente.

---

## 🔒 SSL/HTTPS Automático

Não se preocupe com certificado SSL! O Manus:

✅ Gera certificado SSL automaticamente
✅ Renova certificado a cada 90 dias
✅ Força HTTPS (redireciona HTTP para HTTPS)
✅ Certificado válido em navegadores

Seu site estará seguro automaticamente!

---

## 📊 Comparação: Domínio Manus vs Domínio Personalizado

| Aspecto | Manus (Automático) | Domínio Personalizado |
|--------|-------------------|----------------------|
| **URL** | vendassaas-sqriuhk4.manus.space | vendas.suaempresa.com |
| **Custo** | Gratuito | $10-20/ano (domínio) |
| **Profissionalismo** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Marca Pessoal** | ❌ Mostra "Manus" | ✅ Sua marca |
| **SEO** | Limitado | Melhor |
| **Confiança do Cliente** | Média | Alta |
| **Configuração** | Automática | Manual (DNS) |

---

## 🚀 Passo a Passo Completo (Resumido)

### Se você já tem domínio:

```
1. Abra Management UI → Settings → Domains
2. Clique "Add Custom Domain"
3. Digite seu domínio (ex: vendas.suaempresa.com)
4. Copie o registro CNAME fornecido
5. Vá ao seu registrador de domínio (Registro.br, GoDaddy, etc)
6. Adicione o registro CNAME
7. Aguarde 5 minutos a 48 horas
8. Clique "Verify Domain" no Manus
9. Pronto! ✅
```

### Se você não tem domínio:

```
1. Abra Management UI → Settings → Domains
2. Clique "Buy New Domain"
3. Digite o domínio desejado
4. Clique "Buy"
5. Pague
6. Clique "Connect to Project"
7. Pronto! ✅
```

---

## 🆘 Troubleshooting

### Problema: "Domínio não está conectando"

**Solução 1: Verificar DNS**
```bash
# No terminal, execute:
nslookup vendas.suaempresa.com

# Deve retornar algo como:
# Non-authoritative answer:
# Name: vendas.suaempresa.com
# Address: [IP do Manus]
```

**Solução 2: Limpar Cache DNS**
- Aguarde 24 horas
- Ou limpe cache do navegador (Ctrl+Shift+Delete)
- Ou use DNS público (8.8.8.8)

**Solução 3: Verificar Registro CNAME**
- Volte ao seu registrador
- Confirme que o CNAME foi adicionado corretamente
- Verifique se não há espaços em branco

### Problema: "Certificado SSL inválido"

**Solução**: Aguarde 5-10 minutos após conectar o domínio. O Manus gera o certificado automaticamente.

### Problema: "Página mostra erro 404"

**Solução**: 
1. Verifique se o domínio está conectado no Manus
2. Limpe cache do navegador
3. Tente em navegador privado (Ctrl+Shift+P)

---

## 💡 Dicas Importantes

### ✅ Boas Práticas

1. **Use subdomínio**: `vendas.suaempresa.com` ao invés de `suaempresa.com`
   - Permite usar domínio principal para outros serviços
   - Mais profissional e organizado

2. **Escolha nome descritivo**: 
   - ✅ `vendas.suaempresa.com` - Claro
   - ✅ `sistema.suaempresa.com` - Claro
   - ❌ `app123.suaempresa.com` - Confuso

3. **Não mude DNS durante uso**:
   - Faça mudanças fora do horário de pico
   - Avise seus usuários com antecedência

4. **Mantenha domínio antigo ativo**:
   - Redirecione `vendassaas-sqriuhk4.manus.space` para novo domínio
   - Evita links quebrados

### ❌ Evite

1. ❌ Não adicione múltiplos domínios apontando para o mesmo projeto
2. ❌ Não mude DNS sem fazer backup
3. ❌ Não use caracteres especiais no domínio
4. ❌ Não esqueça de renovar domínio (configurar renovação automática)

---

## 📞 Registradores Populares

Se você não tem domínio, aqui estão opções para comprar:

| Registrador | Site | Preço | Suporte |
|-------------|------|-------|---------|
| **Registro.br** | registro.br | R$ 40/ano | Português |
| **GoDaddy** | godaddy.com | $12/ano | Inglês |
| **NameCheap** | namecheap.com | $9/ano | Inglês |
| **Hostinger** | hostinger.com | $3/ano | Português |
| **Manus** | manus.space | $15/ano | Integrado |

---

## 🎯 Próximos Passos

1. **Decida**: Usar domínio existente ou comprar novo?
2. **Configure**: Siga os passos acima
3. **Teste**: Acesse seu novo domínio
4. **Comunique**: Avise clientes sobre novo URL
5. **Monitore**: Verifique se tudo está funcionando

---

## 📋 Checklist

- [ ] Decidi qual domínio usar
- [ ] Acessei Management UI → Settings → Domains
- [ ] Adicionei domínio personalizado
- [ ] Copiei registro CNAME/A fornecido
- [ ] Atualizei DNS no meu registrador
- [ ] Aguardei propagação (5 min - 48 horas)
- [ ] Cliquei "Verify Domain"
- [ ] Domínio está conectado ✅
- [ ] Testei acesso ao novo URL
- [ ] Atualizei links em marketing/redes sociais

---

## 🎓 Resumo

| Pergunta | Resposta |
|----------|----------|
| **Posso usar domínio personalizado?** | Sim, totalmente! |
| **Qual é o custo?** | Domínio: $10-20/ano. Conexão: Gratuita |
| **Quanto tempo leva?** | 5 minutos a 48 horas |
| **Preciso de conhecimento técnico?** | Não, é muito simples |
| **Posso mudar depois?** | Sim, quantas vezes quiser |
| **SSL/HTTPS é automático?** | Sim, 100% automático |
| **Qual registrador usar?** | Qualquer um. Recomendo Registro.br (Brasil) |

---

## 📞 Suporte

Se tiver dúvidas:

1. **Documentação Manus**: https://docs.manus.im/domains
2. **Suporte Manus**: https://help.manus.im
3. **Chat ao vivo**: Disponível no Dashboard

Boa sorte! 🚀
