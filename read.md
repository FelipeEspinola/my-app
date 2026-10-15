# my-app

Aplicativo de estudo de navegação mobile criado com Expo e React Native. O projeto também pode ser executado no navegador usando React Native Web.

## Tecnologias

- Expo SDK 54
- React 19
- React Native 0.81
- React Navigation: Stack, Bottom Tabs e Drawer
- React Native Web
- `@expo/vector-icons` (ícones Material Icons)

## Pré-requisitos

- Node.js 20.19.4 ou superior
- npm


## Navegação

A navegação ativa é selecionada em `src/routes/index.jsx` pela constante `TIPO_DE_NAVEGACAO`. Escolha uma destas opções:

- `"stack"`: navegação em pilha. É a opção ativa atualmente e contém as telas Home e Product.
- `"bottom"`: navegação por abas inferiores, com Home, Produtos, Profile e Configurações.
- `"drawer"`: menu lateral com Início, Produtos, Perfil e Configurações.

As três opções compartilham as telas implementadas em `src/screens`. A tela Settings está incluída nas abas inferiores e no menu lateral.

## Estrutura do projeto

```text
my-app/
├── app.json                 # Configuração do aplicativo Expo
├── index.js                 # Ponto de entrada e registro do aplicativo
├── package.json             # Scripts e dependências
├── src/
│   ├── App.jsx               # Raiz do aplicativo e suporte a gestos
│   ├── components/
│   │   ├── ButtonIcon.jsx    # Botão reutilizável com ícone
│   │   ├── Header.jsx        # Cabeçalho reutilizável das telas
│   │   └── Title.jsx         # Título reutilizável
│   ├── routes/
│   │   ├── index.jsx         # Seleção do navegador ativo
│   │   ├── BottomRoutes.jsx  # Navegação por abas
│   │   ├── DrawerRoutes.jsx  # Navegação por menu lateral
│   │   └── StackRoutes.jsx   # Navegação em pilha
│   ├── screens/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   └── assets/               # Ícones e imagens usados nas telas
└── read.md                   # Esta documentação
```

## Observações

- As telas são exemplos iniciais para demonstrar os componentes e a navegação.
- A tela Home possui um botão que navega para Product.
- A tela de produtos nas Bottom Tabs exibe um badge com o número `3`.
- Para adicionar uma tela às abas ou ao menu lateral, registre-a no navegador correspondente em `src/routes`.
