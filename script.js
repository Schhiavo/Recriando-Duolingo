let pergunta = {
   titulo: 'Gato',
   alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
   correta: 1
}; //criado objeto pergunta

function mostraquestao(q){
     let titleDiv = document.getElementById('titulo'); // titleDiv está recebendo o elemento do id título
     titleDiv.textContent = q.titulo; //O conteudo de texto do elemento DOM pego pelo titleDiv, vai receber o título do objeto pergunta que foi passado como parametro na função

     let alts = document.querySelectorAll('.alternativa'); // alts vai receber todos os elementos html que possuem a classe "alternativa"

     alts.forEach(function(element, index){
        element.textContent = q.alternativas[index];
     }) // um loop usando ForEach(para cada), que para cada elemento guardado em alts, ele vai exibir um conteudo do array alternativas, começando pelo indice 0
}

mostraquestao(pergunta);