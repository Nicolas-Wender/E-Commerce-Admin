# E-Commerce-Admin

Este é um repositório Full Stack que contém um CMS junto com um Dashboard para um E-Commerce, desenvolvido utilizando Next.js 13, App Router, Tailwind, Prisma, entre outras tecnologias.

Este projeto foi desenvolvido juntamente com o projeto **[E-Commerce-Store](https://github.com/Nicolas-Wender/E-Commerce-Store)**, que por sua vez mostra o lado do cliente de um e-commerce, exibindo produtos, categorias e outros dados cadastrados previamente no painel de administração encontrado neste repositório.

Principais características do projeto:

Utilizamos Shadcn UI para a construção da interface.
No projeto, é possível cadastrar e administrar múltiplas lojas no nosso CMS.
Implementamos um CRUD completo para categorias, produtos e outras características da loja.
O painel permite o acompanhamento de pedidos e vendas.
Sinta-se à vontade para explorar o código e contribuir para o desenvolvimento deste projeto Full Stack!

### Pré-requisitos

Node versão 14

### Clonando o repositório

```
git clone https://github.com/Nicolas-Wender/E-Commerce-Admin.git
```

### Instalando dependências

```
npm i 
```

### Configurando .env file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Conectando PlanetScale e atualizando Prisma

```
npx prisma generate
npx prisma db push
```

### Iniciando a aplicação

```
npm run dev
```
