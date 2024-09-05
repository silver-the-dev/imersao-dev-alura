function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada item de dado na lista de resultados
    for (let dado of dados) {
        // Constrói o HTML para cada item, formatando com os dados do objeto
        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção, atualizando a interface
    section.innerHTML = resultados;
}