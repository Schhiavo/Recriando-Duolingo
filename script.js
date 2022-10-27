let perguntas = [
  {
    titulo: "Gato",
    alternativas: ["Gat", "Cat", "Gate", "Dog"],
    correta: 1,
  },
  {
    titulo: "Cachorro",
    alternativas: ["Cat", "Doge", "Dodge", "Dog"],
    correta: 3,
  },
  {
    titulo: "Água",
    alternativas: ["What", "Whater", "Water", "Watter"],
    correta: 2,
  },
]; // objeto com um array de perguntas

// objeto let app com seus métodos
let app = {
  start: function () {
    this.Atualpos = 0;
    this.Totalpontos = 0;
    let alts = document.querySelectorAll(".alternativa");
    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checaResposta(index);
      });
    });
    this.atualizaPontos();
    this.mostraquestao(perguntas[this.Atualpos]);
  }, // método responsável por ouvir os clicks e chamar os outros métodos.

  mostraquestao: function (q) {
    this.qatual = q;
    let titleDiv = document.getElementById("titulo");
    titleDiv.textContent = q.titulo;

    let alts = document.querySelectorAll(".alternativa");

    alts.forEach(function (element, index) {
      element.textContent = q.alternativas[index];
    });
  }, // método responsável por mostrar o título da questão + alternativas

  Proximaperg: function () {
    this.Atualpos++;
    if (this.Atualpos == perguntas.length) {
      this.Atualpos = 0;
    }
  }, // método que vai manipular o "Atualpos" verificando se o array atingiu o seu tamanho máximo e zerando a variável ou somando +1, caso contrário

  checaResposta: function (user) {
    if (this.qatual.correta == user) {
      console.log("Correta");
      this.Totalpontos++;
      this.mostraresposta(true);
    } else {
      console.log("Errada");
      this.mostraresposta(false);
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
  }, // método que vai verificar a resposta, chamar a proxima pergunta, mostrar o total de pontos e a resposta

  atualizaPontos: function () {
    let scoreDiv = document.getElementById("pontos");
    scoreDiv.textContent = `Sua pontuação é:  
   ${this.Totalpontos}`;
  }, // método que vai atualizar a contagem de pontos

  mostraresposta: function (correto) {
    let resultDiv = document.getElementById("result");
    let result = "";

    if (correto) {
      result = "Resposta Correta!";
    } else {
      let pergunta = perguntas[this.Atualpos];
      let cindice = pergunta.correta;
      let ctexto = pergunta.alternativas[cindice];
      result = `Incorreto! Resposta Correta: 
      ${ctexto}`;
    }
    resultDiv.textContent = result;
  }, //método que vai mostrar se você errou ou não e a resposta correta, caso tenha errado
};
app.start(); // chamada do método start que vai içar os outros métodos
