# Tucunaré - Central de Conteúdo

Projeto desenvolvido em React para a Sprint 3 de Web Development.

## Descrição

O Tucunaré é uma Central de Conteúdo desenvolvida para permitir que o usuário cadastre, visualize, pesquise e exclua conteúdos de forma simples e organizada.

Os dados cadastrados são armazenados no navegador utilizando localStorage, permitindo que os conteúdos continuem disponíveis mesmo após atualizar a página.

## Tecnologias utilizadas

- React
- JavaScript
- HTML
- CSS
- Vite
- LocalStorage
- Git
- GitHub
- Vercel

## Estrutura do projeto

O projeto utiliza componentes funcionais em React, seguindo uma estrutura de pai para filho.

Principais componentes:

- Cabecalho.jsx - responsável pelo cabeçalho da aplicação.
- PainelConteudo.jsx - responsável pelo cadastro, pesquisa, visualização e exclusão dos conteúdos.
- Rodape.jsx - responsável pelo rodapé da aplicação.
- App.jsx - componente principal que organiza os demais componentes.

## Funcionalidades

- Cadastro de novos conteúdos.
- Listagem dos conteúdos cadastrados.
- Pesquisa de conteúdos.
- Exclusão de conteúdos.
- Armazenamento dos dados utilizando localStorage.
- Geração de identificadores aleatórios utilizando Math.random().
- Geração e arredondamento de valores de relevância utilizando Math.round().
- Atualização da interface utilizando React.

## Como instalar as dependências

É necessário ter o Node.js instalado na máquina.

Após baixar ou clonar o projeto, abra o terminal dentro da pasta do projeto e execute:

bash
npm install

Esse comando instala todas as dependências necessárias para executar a aplicação.

Como executar o projeto

Depois de instalar as dependências, execute:

npm run dev

O terminal exibirá um endereço local para acessar a aplicação, normalmente:

http://localhost:5173/

Abra o endereço informado pelo terminal em um navegador.

Como testar a aplicação

Após iniciar o projeto:

Digite um conteúdo no campo de cadastro.
Clique no botão "Adicionar".
Verifique se o conteúdo aparece na lista.
Utilize o campo de busca para pesquisar um conteúdo.
Utilize o botão "Excluir" para remover um conteúdo.
Atualize a página utilizando F5.
Verifique se os conteúdos continuam salvos no localStorage.

Autenticação

O projeto não possui sistema de autenticação.

Portanto, não existem usuários ou senhas necessários para testar a aplicação.

Utilização de Inteligência Artificial
A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente para auxiliar na organização da estrutura dos componentes React e identificação de erros.

O projeto não possui sistema de autenticação.

Portanto, não existem usuários ou senhas necessários para testar a aplicação.

Links do projeto
Repositório GitHub

https://github.com/guilherme-camacho-dev/tucunare-react

Deploy na Vercel

https://tucunare-react.vercel.app

Execução em outra máquina

Para executar o projeto em outra máquina:

Instale o Node.js.
Baixe ou clone o repositório pelo GitHub.
Abra o terminal dentro da pasta do projeto.
Execute:
npm install
npm run dev