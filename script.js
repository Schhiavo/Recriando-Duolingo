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
   this.Atualpos = 0;
   this.Totalpontos = 0;
   let alts = document.querySelectorAll('.alternativa');
   alts.forEach((element, index)=>{
      element.addEventListener('click', ()=>{
        this.checaResposta(index);
      })
   })
   this.atualizaPontos();
    this.mostraquestao(perguntas[this.Atualpos]);
}, 

mostraquestao: function(q){
   this.qatual = q;
     let titleDiv = document.getElementById('titulo'); 
     titleDiv.textContent = q.titulo; 

     let alts = document.querySelectorAll('.alternativa'); 

     alts.forEach(function(element, index){
        element.textContent = q.alternativas[index];
     })
},

Proximaperg: function(){
   this.Atualpos++;
   if(this.Atualpos == perguntas.length){
      this.Atualpos = 0;
   }
},

checaResposta: function(user){
     if(this.qatual.correta == user){
      console.log("Correta");
      this.Totalpontos++;
      this.mostraresposta(true);
     }
     else{
      console.log("Errada");
      this.mostraresposta(false);
     }
     this.atualizaPontos();
     this.Proximaperg();
     this.mostraquestao(perguntas[this.Atualpos]);
},
atualizaPontos: function(){
   let scoreDiv = document.getElementById('pontos');
   scoreDiv.textContent = `Sua pontuação é:  
   ${this.Totalpontos}`;
},

mostraresposta: function(correto){

   let resultDiv = document.getElementById('result');
   let result = ''; 

   if(correto){
      result = 'Resposta Correta!';
   }
   else{
      let pergunta = perguntas[this.Atualpos];
      let cindice = pergunta.correta;
      let ctexto = pergunta.alternativas[cindice];
      result = `Incorreto! Resposta Correta: 
      ${ctexto}`;
   }
   resultDiv.textContent = result;

}

}
app.start();

