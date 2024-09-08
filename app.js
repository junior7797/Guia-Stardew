function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>desculpe, não entendi. Você precisa digitar o nome de um personagem presenteavel</p>"
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = ""; 
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      let resultadoDiv = document.createElement('div');
      resultadoDiv.classList.add('item-resultado');
      let img = document.createElement('img');
      img.src = dado.imagemUrl;
       // Assumindo que dado.imagemUrl existe
      resultadoDiv.appendChild(img);
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento
         
          resultados += `
    <div class="item-resultado">
        <div class="imagem-texto">
            <img src="${dado.imagemUrl}" alt="${dado.titulo}">
            <div class="texto">
                <h2><p class="resultado h2">${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                <p class="descricao-meta">${dado.gosto}</p>
                <div class="imagem-adicional">
                <img src="${dado.imagemadicionais[0]}" alt="${dado.titulo}">
                <img src="${dado.imagemadicionais[1]}" alt="${dado.titulo}">
                <img src="${dado.imagemadicionais[2]}" alt="${dado.titulo}">
            </div>
            </div>
            
        </div>
    </div>
`;
      
      }
  }

  if (!resultados) {
      resultados = "<p>desculpe, não entendi</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;}