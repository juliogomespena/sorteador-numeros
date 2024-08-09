function sortear()
{
    let qtdNumeros, numero1, numero2;

    qtdNumeros = parseInt(document.getElementById("quantidade").value);
    numero1 = parseInt(document.getElementById("de").value);
    numero2 = parseInt(document.getElementById("ate").value);
    console.log("Qtd numeros: " + qtdNumeros);
    console.log("De: " + numero1);
    console.log("Até: " + numero2);

    if(isNaN(qtdNumeros) || isNaN(numero1) || isNaN(numero2))
    {
        alert("Preencha todos os campos!");
    }
    else if(numero2 <= numero1)
    {
        alert("Valor 'até' menor que valor 'de'. Corrija por favor.");
    }
    else if((numero2 - numero1) < qtdNumeros)
    {
        alert("Diminua a quantidade de números ou aumente o intervalo.");
    }
    else
    {
        let contagem = qtdNumeros;
        let sorteados = [];

        while(contagem > 0)
        {
            let verificarNumero = Math.floor(Math.random() * (numero2 - numero1 + 1) + numero1);

            if(sorteados.includes(verificarNumero))
            {
                
            }
            else
            {
                sorteados.push(verificarNumero);
                contagem--;
            }
        }

        console.log("Sorteados: " + sorteados);

        let palavraNumero;
        palavraNumero = qtdNumeros == 1 ? "Número sorteado: " : "Números sorteados: ";
        exibirTextos("labelResultado", palavraNumero + sorteados);

        alternarBotao();
    }
}

function reiniciar()
{
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    alternarBotao();
    
}

function exibirTextos(id, texto)
{
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function alternarBotao()
{
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    let botaoSortear = document.getElementById("btn-sortear");

    if(botaoReiniciar.classList.contains("container__botao-desabilitado") && botaoSortear.classList.contains("container__botao")) 
    {
        botaoReiniciar.classList.remove("container__botao-desabilitado")
        botaoReiniciar.classList.add("container__botao");
        botaoSortear.classList.remove("container__botao")
        botaoSortear.classList.add("container__botao-desabilitado");
    }
    else
    {
        botaoReiniciar.classList.remove("container__botao")
        botaoReiniciar.classList.add("container__botao-desabilitado");
        botaoSortear.classList.remove("container__botao-desabilitado")
        botaoSortear.classList.add("container__botao");
    }
}

/*
function limparCampo()
{
    document.querySelector('input');
    chute.value = '';
}*/