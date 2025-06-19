
var botao = document.getElementById("botao")

function gerarPiada() {
   fetch("https://official-joke-api.appspot.com/random_joke")
   .then(response => response.json())
   .then(data => {
       alert(`${data.setup}\n${data.punchline}`);
   })
   .catch(error => {
       alert("Erro ao buscar piada: " + error);
   });
}

var botao2 = document.getElementById("botao2")

function gerar() {

    fetch("https://restcountries.com/v3.1/name/brasil")
    .then(response => response.json())
    .then(data => {
        alert(`Nome: ${data[0].name.common}\nCapital: ${data[0].capital}\nPopulação: ${data[0].population}`);
    })
    .catch(error => {
        alert("Erro ao buscar dados do país: " + error);
    });
}