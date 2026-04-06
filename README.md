# Go Platform Auth - Frontend Client

Uma interface de usuário moderna e responsiva para gestão de identidade, construída para se integrar perfeitamente e consumir a API de autenticação desenvolvida em Go (Golang). Este projeto gerencia todo o fluxo de acesso do usuário, desde a criação da conta até a recuperação e verificação de credenciais.

## 🚀 Tecnologias Utilizadas

* **[Angular 20](https://angular.dev/)**: Framework principal da aplicação, utilizando as versões mais recentes do core e roteamento.
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utilitário configurado para a estilização ágil e design responsivo.
* **[Lucide Angular](https://lucide.dev/)**: Biblioteca escolhida para fornecer ícones consistentes e elegantes na interface.
* **TypeScript**: Linguagem base que garante tipagem estática e maior segurança no desenvolvimento.

## ✨ Funcionalidades (Fluxo de Autenticação)

O sistema conta com um roteamento completo para gestão de acesso, rigorosamente protegido por Guards de navegação:

* **Login & Registro**: Telas de acesso e criação de novas contas (`/login`, `/register`).
* **Verificação de Código**: Confirmação de identidade ou ativação de conta através de códigos (`/verify`).
* **Gestão de Senha**: Fluxos para definição inicial de senha e redefinição em caso de esquecimento (`/set-password`, `/reset-password`).
* **Dashboard Protegida**: Área logada exclusiva para usuários já autenticados (`/dashboard`).
* **Controle de Acesso**: Utilização de `authGuard` para bloquear áreas restritas e `guestGuard` para impedir que usuários logados acessem novamente as telas de login.

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/)
* [Angular CLI](https://angular.dev/tools/cli)

## 📦 Como executar o projeto

1. Clone o repositório para sua máquina local.
2. Acesse a pasta do projeto e instale as dependências:
   ```bash
   npm install
3. Inicie o servidor de desenvolvimento local:
    ```bash
   npm run start
O aplicativo estará disponível no seu navegador em http://localhost:4200/. A aplicação recarregará automaticamente se você alterar qualquer um dos arquivos de código-fonte.
##🏗️ Estrutura de Scripts Úteis
Conforme configurado no projeto, os seguintes atalhos estão disponíveis via NPM:

npm run start: Inicia a aplicação no servidor de desenvolvimento.

npm run build: Compila o projeto otimizado para o ambiente de produção (ng build).

npm run watch: Compila o projeto em modo de observação contínua para desenvolvimento.

npm run test: Executa a suíte de testes unitários (ng test).

👤 Autor
Jean Pereira dos Reis
