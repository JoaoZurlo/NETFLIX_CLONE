

# Netflix Clone

Este é um projeto de clone da interface do Netflix, desenvolvido para prática e aprendizado de conceitos de desenvolvimento web. O projeto utiliza a API do The Movie Database (TMDb) para buscar dados de filmes e categorias.

## Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend:**
  - Node.js
  - Express.js

- **APIs:**
  - The Movie Database (TMDb) API

## Funcionalidades

- **Navegação:**
  - Barra de navegação com logo e botões de ação.
  
- **Seção Principal:**
  - Exibição de categorias de filmes com filmes populares.
  - Navegação horizontal entre os filmes de cada categoria.

## Estrutura do Projeto

```bash
/project-root
  /public
    /images
    /scripts
      - apiConfig.js
      - apiService.js
      - domUtils.js
      - main.js
      - scroll.js
    /styles
    - index.html
  /src
    - server.js
    - app.js
  - package.json
```

### Descrição dos Arquivos

- **/public/scripts/apiConfig.js:** Configurações da API, incluindo a chave da API e URLs base.
- **/public/scripts/apiService.js:** Funções para buscar dados da API do TMDb.
- **/public/scripts/domUtils.js:** Funções para manipulação do DOM e criação de elementos dinâmicos.
- **/public/scripts/main.js:** Script principal que inicializa a aplicação e coordena a chamada das outras funções.
- **/public/scripts/scroll.js:** Função para configurar a rolagem horizontal dos filmes.
- **/src/app.js:** Configura a aplicação Express e serve arquivos estáticos.
- **/src/server.js:** Inicializa o servidor Express e define a rota para `index.html`.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Conta no TMDb para obter uma chave de API

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/netflix-clone.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd netflix-clone
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure a chave da API no arquivo `public/scripts/apiConfig.js`:
   ```javascript
   export const apiConfig = {
     apiKey: "sua-chave-de-api-do-tmdb",
     imgUrl: "https://image.tmdb.org/t/p/w500",
     genresListHttp: "https://api.themoviedb.org/3/genre/movie/list?",
     movieGenresHttp: "https://api.themoviedb.org/3/discover/movie?"
   };
   ```

### Executando o Projeto

1. Inicie o servidor:
   ```bash
   npm start
   ```

2. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## Contribuição

1. Fork este repositório.
2. Crie uma branch: `git checkout -b minha-nova-feature`.
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`.
4. Envie para o branch original: `git push origin minha-nova-feature`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Autor

- **Seu Nome**
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/seu-perfil)
- GitHub: [Seu GitHub](https://github.com/seu-usuario)

---

Essa descrição fornece uma visão geral do projeto, instruções sobre como configurá-lo e executá-lo, além de detalhes sobre a estrutura do projeto e os arquivos principais. Ela também incentiva a contribuição e menciona a licença do projeto.
