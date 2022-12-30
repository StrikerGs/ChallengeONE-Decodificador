// capturando o input da pagina utilizando querySelector
const entrada = document.querySelector("input");
// usando querySelector para também capturar o select da página através do seu id
const escolha = document.querySelector("#decod");
// capturando o textarea para inserirmos o valor nele
const campo = document.querySelector("#resultado");


                                             // passando o evento como parâmetros, que será passado a função checkChar
entrada.addEventListener("keypress", function(e){

    // já que a função retorna true, ao inves de digitar checkChar == false, posso usar ! para simplificar
    // sendo assim, fica NOT TRUE
    if(!checkChar(e)) {

        // aqui estou dizendo que o comportamento padrão do evento não será executado
        // e esse comportamento padrão seria aparecer a letra digitada no input
        e.preventDefault();

    }

});

// função para não permitir nada além de letrar minusculas e espaço checando os caracteres passando o parâmetro e = event
function checkChar(e){

    const char = String.fromCharCode(e.keyCode);

    //console.log(e.keyCode);
    //console.log(char);

    // expressão regular(regex) para verificar se contem letras maiusculas, acentos ou caracteres especiais
    const pattern = '[a-z ]';

    if(char.match(pattern)){

        return true;

    }
}

// função para o botão de copiar o texto
function copiarTexto(){

    // pegando o textarea pelo id
    let textoCopiado = document.getElementById("resultado");
    //selecionando o texto
    textoCopiado.select();
    // selecionando do começo até o fim
    textoCopiado.setSelectionRange(0, 99999);
    // executando a função de copiar, que seria o ctrl C
    document.execCommand("copy");
    alert("O texto foi copiado");

}

function codificador(){

    // selecionando uma option dentro do select
    let valor = escolha.options[escolha.selectedIndex].text;
    let mensagem = entrada.value;

    // criptografar e descriptografar
    if(valor == "Criptografar") {

        // utilizando a função replace com o regex para alterar as respectivas letras especificadas dentro do regex
        let resultado = (mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat"));
        campo.value = resultado;
    

    } else if(valor == "Descriptografar") {

        // utilizando a função replace também para voltar as palavras ao valor original
        //alert(mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"));
        let resultado = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        campo.value = resultado;
    }

}


// querySelector para pegar o botão e podermos usar o onclick
let botao = document.querySelector("#enviar");

// event.preventDefault() para o botão não atualizar a pagina sempre que clicarmos nele
// assim o valor não irá sumir do textarea
botao.addEventListener("click", function(event){
    event.preventDefault();
});
// quando clicarmos no botão, a função será acionada
// passamos sem parênteses para que a função não seja chamada assim que carregar a pagina
// ao passar sem os parenteses, passamos apenas o código da função para o onclick
botao.onclick = codificador;

// pegando o botão de copiar e executando a mesma lógica do botão anterior
let botaoCopiar = document.querySelector("#copiar");

botaoCopiar.addEventListener("click", function(event){

    event.preventDefault();

});

botaoCopiar.onclick = copiarTexto;
