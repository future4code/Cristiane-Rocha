let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><ul>Despesas Detalhadas</ul></p>'

     // IMPLEMENTAÇÃO
    despesas.forEach((despesa) => {
        divDespesas.innerHTML += `<li>Valor: ${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}</li>`
    })    
}

     //FIM DA IMPLEMENTAÇÃO

// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // IMPLEMENTAÇÃO
    arrDespesas.forEach((desp) => {
        if(desp.tipo === "alimentação"){
            gastoAlimentacao += desp.valor
        }else if(desp.tipo === "utilidades"){
            gastoUtilidades += desp.valor
        }else if(desp.tipo === "viagem"){
            gastoViagem += desp.valor
        }
    })
    
    //Desafio 03
    gastoTotal = arrDespesas.reduce(function(soma, desp){
        return soma + desp.valor;
    }, 0);

     // FIM DA IMPLEMENTAÇÃO

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato(arrDespesas)
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    //Desafio 01
    if(((tipoFiltro != "") && (valorMin != "") && (valorMax != "")) && (valorMin < valorMax) && ((valorMin > 0) && (valorMax > 0)) ){
       let despesasFiltradas = arrDespesas.filter((desp) => {
        if(desp.tipo === tipoFiltro && desp.valor >= valorMin && desp.valor <= valorMax){
            return true
        }
        return false
    })

    imprimirDespesas(despesasFiltradas)
    }else {
        alert("`Faltou algum valor, ou o valor mínimo que você digitou é maior que o maximo digitad ou algum valor é um número negativo`")
    }

    

    
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}


//Desafio 02
function organiza(){
    arrDespesas.sort(function(a, b) {
         return a.valor - b.valor;
    });

    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><ul>Despesas Detalhadas</ul></p>'

    let ordermMaior = arrDespesas.reverse()
    ordermMaior.forEach((despesa) => {
        divDespesas.innerHTML += `<li>Valor: ${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}</li>`
    })  
}