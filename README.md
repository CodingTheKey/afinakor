# Projeto Expo

Este é um projeto React Native usando Expo com uma estrutura de pastas organizada e escalável.

## Estrutura de Pastas

```
src/
├── app/             # App entry points e navegação
├── assets/          # Arquivos estáticos (imagens, fontes, etc)
├── components/      # Componentes reutilizáveis
│   ├── common/      # Componentes comuns (botões, inputs, etc)
│   └── layouts/     # Componentes de layout
├── config/          # Arquivos de configuração
├── constants/       # Constantes e enums
├── hooks/           # Custom React hooks
├── navigation/      # Configuração de navegação
├── screens/         # Componentes de tela
├── services/        # Serviços e integrações
├── store/          # Gerenciamento de estado
├── theme/          # Configuração de tema
├── types/          # Definições de tipos TypeScript
└── utils/          # Funções utilitárias
```

## Convenções de Código

### Componentes

- Use TypeScript para todos os componentes
- Nomeie arquivos de componentes com PascalCase (ex: `Button.tsx`)
- Coloque estilos no mesmo arquivo usando `StyleSheet.create`
- Use tipos explícitos para props e estados

### Estilização

- Use o tema centralizado em `src/theme`
- Mantenha consistência usando as constantes de cores, espaçamento e tipografia
- Evite valores hardcoded nos estilos

### Navegação

- Defina tipos para parâmetros de rota em `src/navigation/types.ts`
- Use constantes para nomes de rotas

### Serviços

- Centralize chamadas de API em `src/services`
- Use interceptors para tratamento global de erros e autenticação

### Estado

- Mantenha o estado global organizado por features
- Use hooks customizados para lógica reutilizável

## Instalação

```bash
npm install
# ou
yarn install
```

## Executando o Projeto

```bash
npm start
# ou
yarn start
```

## Dependências Principais

- Expo
- React Navigation
- Axios
- TypeScript

## Contribuindo

1. Siga as convenções de código estabelecidas
2. Mantenha a estrutura de pastas organizada
3. Documente novos componentes e funcionalidades
4. Faça testes antes de submeter alterações 