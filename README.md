# Movie Tracker

Movie Tracker é um aplicativo web desenvolvido com **React** e **TypeScript** que permite aos usuários buscar e explorar filmes e séries utilizando a API do TMDB (The Movie Database). Com uma interface amigável, os usuários podem visualizar informações detalhadas sobre cada filme e série, como título, sinopse, classificação, data de lançamento, e muito mais.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Axios** - Cliente HTTP para fazer requisições à API do TMDB.
- **TMDB API** - API externa para obter informações sobre filmes e séries.

## Funcionalidades

- **Busca por filmes e séries**: Pesquise facilmente por filmes e séries com base no nome.
- **Detalhes do filme/série**: Veja informações detalhadas, como sinopse, elenco, classificação e datas.
- **Listagem de filmes populares**: Exiba filmes populares na página inicial.
- **Interface responsiva**: Design que se adapta a diferentes tamanhos de tela.


movie-tracker/
├── public/
│   └── index.html           # Arquivo HTML principal
├── src/
│   ├── assets/              # Arquivos estáticos (imagens, ícones, etc.)
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/               # Páginas do aplicativo
│   ├── services/            # Serviços (requisições API)
│   ├── App.tsx              # Componente principal
│   └── index.tsx            # Ponto de entrada da aplicação
├── .env                     # Arquivo de variáveis de ambiente
├── package.json             # Gerenciador de dependências
└── tsconfig.json            # Configuração do TypeScript


# Licença
Este projeto está licenciado sob a MIT License.