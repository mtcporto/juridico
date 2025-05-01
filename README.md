# Notícias Jurídicas

## Descrição do Projeto

Este projeto é um agregador de notícias jurídicas que coleta e exibe informações de diversas fontes oficiais do Brasil, incluindo o Superior Tribunal de Justiça (STJ) e a Câmara dos Deputados. A aplicação web apresenta as notícias em um formato de cards elegante e responsivo, permitindo aos usuários se manterem atualizados sobre as mais recentes novidades do mundo jurídico brasileiro.

## Funcionalidades

- Exibição de notícias do STJ (notícias gerais)
- Exibição de notícias da Câmara dos Deputados (categoria Direito e Justiça)
- Suporte para informativos de jurisprudência do STJ (desativado por padrão)
- Carregamento de mais notícias sob demanda
- Interface responsiva para uso em diferentes dispositivos
- Exibição formatada com imagens, títulos e datas

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página web
- **CSS3**: Estilização dos componentes e layout
- **JavaScript (ES6+)**: Lógica de programação e manipulação do DOM
- **Bootstrap 4**: Framework CSS para design responsivo
- **Fetch API**: Requisições HTTP para buscar dados de feeds RSS
- **DOMParser**: Processamento de conteúdo XML e HTML
- **Promises**: Gerenciamento de operações assíncronas

## Fontes de Dados

- Feed RSS do STJ: `https://res.stj.jus.br/hrestp-c-portalp/RSS.xml`
- Feed RSS da Câmara dos Deputados: `https://www.camara.leg.br/noticias/rss/dinamico/DIREITO-E-JUSTICA`
- Feed XML de Informativos de Jurisprudência do STJ: `https://processo.stj.jus.br/jurisprudencia/externo/InformativoFeed`

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador web moderno
3. Ou hospede os arquivos em um servidor web

Para habilitar o feed de Informativos de Jurisprudência do STJ, descomente a linha correspondente no arquivo `index.html`.

## Estrutura do Projeto

- `index.html`: Página principal da aplicação
- `styles.css`: Estilos CSS para a aplicação
- `stj.js`: Script para carregar notícias do STJ
- `camara.js`: Script para carregar notícias da Câmara dos Deputados
- `stjInformativo.js`: Script para carregar informativos de jurisprudência do STJ
- `imagens/`: Diretório com logos e imagens usadas na aplicação