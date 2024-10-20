# Teste Frontend

Desafio técnico para Frontend -VR

## Descrição

Desenvolva uma aplicação em React JS que seja um micro front-end utilizando Module Federation.

## Tecnologias utilizadas

1. React
2. Typescript
3. Vite
4. Zustand
5. React Query
6. Axios
7. Tailwind

## Descrição dos Apps

- **vr-commerce (host/remote):** app principal, onde a aplicação é montada e o estado é compratilhado;
- **vr-header (remote):** app header, onde existe a interação com o modal;
- **vr-footer (remote):** app footer;
- **vr-cards (remote):** app cards, onde está a consulta a API e interação para adicionar produtos ao carrinho.

## Instruções de uso

### Instalar dependências

```bash
  $ cd nome-do-app
  $ npm install
```

### Iniciar modo desenvolvimento

```bash
  $ npm run dev
```

### Fazer o build do app

```bash
  $ npm run build
```

### Lançar o preview do app

```bash
  $ npm run preview
```

### Executar testes

```bash
  $ npm run test
```

### Observações

Para realizar commits dentro do padrão necessário instalar dependências gerais (base do projeto).
