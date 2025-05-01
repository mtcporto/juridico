// stjInformativo.js
function loadSTJInformativoNews() {
    const url = 'https://cors.mosaicoworkers.workers.dev/processo.stj.jus.br/jurisprudencia/externo/InformativoFeed';
    let newsCount = 0;
    
    function loadNews() {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          const items = xmlDoc.querySelectorAll('entry');
    
          items.forEach((item, index) => {
            if (index >= newsCount && index < newsCount + 30) {
              const title = item.querySelector('title').textContent;
              const link = item.querySelector('link').getAttribute('href');
              const pubDate = new Date(item.querySelector('updated').textContent).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              });
    
              const html = `
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                    <p class="fonte">
                    <span class="badge badge-warning">Fonte: STJ - Informativos de Jurisprudência</span>
                    </p>                      
                    <h5 class="card-title">${title}</h5>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <a href="${link}" target="_blank" class="btn btn-sm btn-outline-secondary">Ver Informativo</a>
                        </div>
                        <small class="text-muted">${pubDate}</small>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              document.querySelector("#newsCards").innerHTML += html;
            }
          });
          newsCount += 30;
          if (newsCount < items.length) {
            document.querySelector("#loadMore").style.display = 'block';
          } else {
            document.querySelector("#loadMore").style.display = 'none';
          }
        })
        .catch(error => console.error('Erro:', error));
    }
    
    document.querySelector("#loadMore").addEventListener('click', loadNews);
    loadNews();  
}
