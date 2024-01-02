# E-Commerce-Admin

Esse é um repositório Full Stack de um CMS e Dashboard de um E-Commerce, desenvolvido com Next.js 13, App Router, Tailwind, Prisma, entre outras tecnologias

Esse projeto foi desenvolvido em conjunto com o projeto **[E-Commerce-Store](https://github.com/Nicolas-Wender/E-Commerce-Store)** , que por sua vez mostra o lado do cliente de um e-commerce, bem como produtos, categorias e outros dados cadastrados previamentes no painel de administrador encontrado nesse repositório

- Utilizamos Shadcn UI para a construção da interface 
- No projeto, podemos cadastrar e administrar multiplas lojas no nosso CMS
- Temos um CRUD completo para categorias, produtos e outras características da loja
- Podemos acompanhar os pedidos e vendas no nosso painel

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
