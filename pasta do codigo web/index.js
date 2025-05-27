console.log("script inicializado");

const inputNome = document.getElementById("inptNome");
const inputidade = document.getElementById("inptIdade");
const btnSalvar = document.getElementById("btnSalvar");
const divResponse = document.getElementById("responseContainer");


btnSalvar.addEventListener("click", btnAction);

function btnAction(){
    alert("heitor bobão");
    console.log("text");

    let nome = inputnome.value;
    let idade = inputidade.value;

    console.log(nome);
    console.log(idade);

    divResponse.innerHtml += `<strong> ${nome} </strong>`;
    divResponse.innerHtml += `<strong> ${idade} </strong>`;
    divResponse.innerHtml += `<strong> ${salvar} </strong>`;
}
