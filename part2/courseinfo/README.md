# Course Info - Part 2 Exercises

Este projeto implementa os exercícios 2.1-2.5 do Full Stack Open.

## Exercícios Implementados

### 2.1: Course information step 6
- ✅ Criado componente `Course` que renderiza informações do curso
- ✅ Estrutura de componentes: App → Course → Header, Content, Part
- ✅ Funciona com qualquer número de partes do curso

### 2.2: Course information step 7
- ✅ Adicionado componente `Total` que mostra a soma dos exercícios

### 2.3: Course information step 8
- ✅ Cálculo da soma usando o método `reduce`
- ✅ Implementação: `parts.reduce((sum, part) => sum + part.exercises, 0)`

### 2.4: Course information step 9
- ✅ Aplicação suporta múltiplos cursos
- ✅ Renderiza array de cursos usando `map`
- ✅ Inclui curso "Half Stack application development" e "Node.js"

### 2.5: Separate module step 10
- ✅ Componente `Course` movido para módulo separado (`Course.jsx`)
- ✅ Todos os subcomponentes incluídos no mesmo módulo
- ✅ Importação correta no `App.jsx`

## Como executar

```bash
cd part2/courseinfo
npm install
npm start
```

## Estrutura de Arquivos

```
src/
├── App.jsx          # Componente principal com dados dos cursos
├── Course.jsx       # Módulo com Course e subcomponentes
└── index.js         # Ponto de entrada da aplicação
```

## Componentes

- **Course**: Componente principal que renderiza um curso completo
- **Header**: Exibe o nome do curso
- **Content**: Renderiza todas as partes do curso
- **Part**: Renderiza uma parte individual (nome + exercícios)
- **Total**: Calcula e exibe o total de exercícios usando reduce
