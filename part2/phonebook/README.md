# Phonebook - Part 2 Exercises

Este projeto implementa os exercícios 2.6-2.10 do Full Stack Open.

## Exercícios Implementados

### 2.6: The Phonebook Step 1
- ✅ Criado formulário para adicionar nomes à agenda
- ✅ Estado controlado para input de nome
- ✅ Prevenção do comportamento padrão do formulário
- ✅ Renderização da lista de pessoas

### 2.7: The Phonebook Step 2
- ✅ Validação para prevenir nomes duplicados
- ✅ Alerta quando usuário tenta adicionar nome existente
- ✅ Uso de template strings para mensagens dinâmicas

### 2.8: The Phonebook Step 3
- ✅ Adicionado campo para números de telefone
- ✅ Estado separado para controlar input de número
- ✅ Renderização de nome e número juntos

### 2.9: The Phonebook Step 4
- ✅ Implementado campo de busca/filtro
- ✅ Filtro case-insensitive por nome
- ✅ Dados de exemplo para teste (Arto, Ada, Dan, Mary)
- ✅ Renderização dinâmica baseada no filtro

### 2.10: The Phonebook Step 5
- ✅ Refatoração em componentes separados:
  - **Filter**: Campo de busca
  - **PersonForm**: Formulário para adicionar pessoas
  - **Persons**: Lista de pessoas
  - **Person**: Pessoa individual
- ✅ Estado e event handlers mantidos no App
- ✅ Props passadas corretamente entre componentes

### 2.11: The Phonebook Step 6
- ✅ Criado arquivo `db.json` com dados iniciais
- ✅ Adicionado axios para requisições HTTP
- ✅ Implementado useEffect para buscar dados do servidor
- ✅ Configurado json-server na porta 3001
- ✅ Estado inicial agora é carregado do servidor

### 2.12: The Phonebook Step 7
- ✅ Novas pessoas são salvas no servidor backend
- ✅ Requisições POST para adicionar dados
- ✅ Estado local atualizado com dados retornados do servidor

### 2.13: The Phonebook Step 8
- ✅ Criado módulo `services/persons.js` para comunicação com backend
- ✅ Funções separadas: getAll, create, update, remove
- ✅ Código de comunicação extraído do componente App

### 2.14: The Phonebook Step 9
- ✅ Implementado botão "delete" para cada pessoa
- ✅ Confirmação com window.confirm antes de deletar
- ✅ Requisições DELETE para remover do servidor
- ✅ Estado local atualizado após remoção

### 2.15: The Phonebook Step 10
- ✅ Atualização de números existentes com requisições PUT
- ✅ Confirmação para substituir número existente
- ✅ Spread operator para criar objeto atualizado
- ✅ Estado local atualizado com dados modificados

## Como executar

### Pré-requisitos
Instale o json-server globalmente:
```bash
npm install -g json-server
```

### Executar a aplicação
1. **Terminal 1** - Inicie o json-server:
```bash
cd part2/phonebook
npm run server
# ou
json-server -p3001 --watch db.json
```

2. **Terminal 2** - Inicie a aplicação React:
```bash
cd part2/phonebook
npm install
npm start
```

### Verificar o servidor
Acesse http://localhost:3001/persons para ver os dados do servidor.

## Estrutura de Componentes

```
App
├── Filter (campo de busca)
├── PersonForm (formulário de adição)
└── Persons
    └── Person (pessoa individual)
```

## Funcionalidades

- ✅ Adicionar novas pessoas com nome e número
- ✅ Validação de nomes duplicados com opção de atualizar
- ✅ Busca/filtro por nome (case-insensitive)
- ✅ Interface limpa e organizada
- ✅ Componentes bem estruturados e reutilizáveis
- ✅ Dados carregados do servidor usando axios
- ✅ useEffect para efeitos colaterais
- ✅ **Persistência no servidor**: todas as operações são salvas
- ✅ **Deletar pessoas**: botão delete com confirmação
- ✅ **Atualizar números**: substituir números existentes
- ✅ **Módulo de serviços**: comunicação com backend organizada

## Dados de Exemplo

A aplicação vem com dados pré-carregados:
- Arto Hellas: 040-123456
- Ada Lovelace: 39-44-5323523
- Dan Abramov: 12-43-234345
- Mary Poppendieck: 39-23-6423122
