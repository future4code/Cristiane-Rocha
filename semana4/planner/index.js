let textoTarefa = document.getElementById('tarefa')
let semana = document.querySelectorAll('.semana')




//Seleciona dia da semana
function alteraOpcao(){
	let selectDias = document.getElementById("dias-semana")
	let opcaoDia = selectDias.options[selectDias.selectedIndex].value
	return opcaoDia
}
//Função criar tarefa
function criarTarefa(){
	if(textoTarefa.value === ""){
		alert("Você precisa digitar uma tarefa para poder incluir!")
		return
	}else{
		switch(alteraOpcao()){
			case "domingo":
				semana[0].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "segunda":
				semana[1].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "terca":
				semana[2].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "quarta":
				semana[3].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "quinta":
				semana[4].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "sexta":
				semana[5].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
			case "sabado":
				semana[6].innerHTML += `<li class="item-lista">${textoTarefa.value}</li>`
			break;
		}
		textoTarefa.value = ""
	}
	}
	
