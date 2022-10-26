let perguntas = [
{
   titulo: 'Gato',
   alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
   correta: 1
},
{
   titulo: 'Cachorro',
   alternativas: ['Cat', 'Doge', 'Dodge', 'Dog'],
   correta: 3
},
{
   titulo: 'Água',
   alternativas: ['What', 'Whater', 'Water', 'Watter'],
   correta: 2
}
]

let app = {

 start: function(){

   let alts = document.querySelectorAll('.alternativa');
   alts.forEach((element, index)=>{
      element.addEventListener('click', ()=>{
        this.checaResposta(index);
      })
   })
    this.mostraquestao(perguntas);
}, //uma nova função para sempre adicionar um evento a cada questão criada no app, que vai ser responsavel por "ouvir" o evento click do mouse e verificar se a alternativa está correta

mostraquestao: function(q){
   this.qatual = q;
     let titleDiv = document.getElementById('titulo'); // titleDiv está recebendo o elemento do id título
     titleDiv.textContent = q.titulo; //O conteudo de texto do elemento DOM pego pelo titleDiv, vai receber o título do objeto pergunta que foi passado como parametro na função

     let alts = document.querySelectorAll('.alternativa'); // alts vai receber todos os elementos html que possuem a classe "alternativa"

     alts.forEach(function(element, index){
        element.textContent = q.alternativas[index];// um loop usando ForEach(para cada), que para cada elemento guardado em alts, ele vai exibir um conteudo do array alternativas, começando pelo indice 0
     })
},
checaResposta: function(user){
     if(this.qatual.correta == user){
      console.log("Correta");
     }
     else{
      console.log("Errada");
     }
}
}
app.start();

