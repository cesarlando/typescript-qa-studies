# TypeScript QA Studies

Projeto de estudos desenvolvido como parte do meu PDI, com foco no aprendizado e aplicação dos fundamentos da linguagem TypeScript.

O repositório contém pequenos scripts desenvolvidos de forma progressiva, explorando conceitos da linguagem e sua aplicação em situações relacionadas à lógica de programação e à área de Quality Assurance.

## Objetivos

- Praticar a sintaxe e os principais recursos do TypeScript;
- Trabalhar com tipagem, funções, arrays e estruturas de controle;
- Aplicar validações e tratamento de entradas;
- Relacionar os conhecimentos da linguagem com situações de QA;
- Praticar versionamento de código com Git e GitHub.

## Scripts

### 01 - Fibonacci

Geração da sequência de Fibonacci a partir de uma quantidade informada.

Conceitos praticados:

- Tipagem com `number` e `number[]`;
- Funções e tipos de retorno;
- `const` e `let`;
- Estrutura de repetição `for`;
- Estruturas condicionais;
- Arrays e método `push()`;
- Early return;
- Validação de entradas;
- Tratamento de erros com `throw new Error()`.

### 02 - Validação de Order Pool

Simulação do resultado de uma consulta de detalhes de uma ordem de saída para validar se a OS pode ser incluída em um Order Pool com base na quantidade planejada disponível.

Conceitos praticados:

- Interfaces;
- Objetos e arrays de objetos;
- Valores booleanos;
- Arrow functions;
- Método de array `some()`;
- Estruturas condicionais com `if`, `else if` e `else`;
- Validação de retorno vazio de uma consulta;
- Aplicação de TypeScript em um cenário de validação de QA.

### 03 - Em desenvolvimento

Script com foco na aplicação de TypeScript em um contexto relacionado a QA.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o exercício de Fibonacci:

```bash
npm run fibonacci
```

Execute a validação de Order Pool:

```bash
npm run order-pool
```

Para apenas compilar o projeto:

```bash
npm run build
```

## Tecnologias

- TypeScript
- Node.js
- Git
- GitHub