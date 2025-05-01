// stj.js
function loadSTJNews() {
  const url = 'https://res.stj.jus.br/hrestp-c-portalp/RSS.xml';
  const baseUrl = 'https://res.stj.jus.br';
  let newsCount = 0;

  // Função auxiliar para converter a data
  function convertDate(dateString) {
      const months = {
          jan: '01',
          fev: '02',
          mar: '03',
          abr: '04',
          mai: '05',
          jun: '06',
          jul: '07',
          ago: '08',
          set: '09',
          out: '10',
          nov: '11',
          dez: '12'
      };
      const dateParts = dateString.split(' ');
      const day = dateParts[2];
      const month = months[dateParts[1].toLowerCase()];
      const year = dateParts[3];
      const time = dateParts[4];
      return `${day}/${month}/${year} ${time}`;
  }
  
  function loadNews() {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
  
        items.forEach((item, index) => {
          if (index >= newsCount && index < newsCount + 30) {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const pubDate = convertDate(item.querySelector('pubDate').textContent);
  
            let imgURL = "imagens/stjlogo.png";
            let contentEncoded = item.querySelector('content\\:encoded, encoded').textContent;
            const parser = new DOMParser();
            const contentDoc = parser.parseFromString(contentEncoded, 'text/html');
            const imgElement = contentDoc.querySelector('img');
            if (imgElement) {
              imgURL = baseUrl + imgElement.getAttribute('src');
            }
  
            const html = `
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${imgURL}" class="bd-placeholder-img card-img-top" width="100%" height="225">
                  <div class="card-body">
                  <p class="fonte">
                  <span class="badge badge-info">Fonte: STJ</span>
                  </p>                      
                  <h5 class="card-title">${title}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="${link}" target="_blank" class="btn btn-sm btn-outline-secondary">Ver Notícia</a>
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
