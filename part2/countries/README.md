# Country Data - Part 2 Exercises

Este projeto implementa os exercícios 2.18-2.20 do Full Stack Open.

## Exercícios Implementados

### 2.18: Data for countries, step 1
- ✅ Busca de países via REST API (https://studies.cs.helsinki.fi/restcountries/)
- ✅ Campo de busca para filtrar países
- ✅ Lógica de exibição baseada no número de resultados:
  - Mais de 10: "Too many matches, specify another filter"
  - 2-10: Lista de países
  - 1: Detalhes completos do país

### 2.19: Data for countries, step 2
- ✅ Botão "show" para cada país na lista
- ✅ Ao clicar, mostra detalhes completos do país
- ✅ Navegação entre lista e detalhes

### 2.20: Data for countries, step 3
- ✅ Dados meteorológicos da capital usando OpenWeatherMap API
- ✅ Temperatura, ícone do clima e velocidade do vento
- ✅ Uso de variável de ambiente para API key
- ✅ Tratamento de erros para dados meteorológicos

## Como executar

### Pré-requisitos
1. Obter API key do OpenWeatherMap (https://openweathermap.org)
2. Criar arquivo `.env` na raiz do projeto:
```
VITE_OPENWEATHER_KEY=sua_api_key_aqui
```

### Executar a aplicação
```bash
cd part2/countries
npm install
npm start
```

### No Windows PowerShell (alternativa):
```powershell
$env:VITE_OPENWEATHER_KEY="sua_api_key" 
npm start
```

## Funcionalidades

- ✅ **Busca de países**: Campo de texto para filtrar países
- ✅ **Filtro inteligente**: Diferentes comportamentos baseados no número de resultados
- ✅ **Detalhes do país**: Nome, capital, área, idiomas e bandeira
- ✅ **Botões show**: Navegação rápida para detalhes
- ✅ **Dados meteorológicos**: Temperatura, ícone e vento da capital
- ✅ **Variáveis de ambiente**: API key segura
- ✅ **Tratamento de erros**: Fallback quando dados não estão disponíveis

## APIs Utilizadas

- **REST Countries**: https://studies.cs.helsinki.fi/restcountries/
- **OpenWeatherMap**: https://openweathermap.org/api

## Estrutura de Componentes

```
App
├── CountryList (lista de países com botões show)
└── CountryDetails (detalhes completos + clima)
```

## Exemplos de Uso

- Digite "fin" → Mostra Finlândia com detalhes e clima
- Digite "stan" → Lista países que contêm "stan"
- Digite "a" → "Too many matches, specify another filter"
