



//Array com todas as postagens
const posts = []

//função ligada ao botão, que adciona itens ao objeto post e o post ao array posts
function adcionaAoObjeto(){
	let tituloPost = document.querySelector("#titulo-post")
	let autorPost = document.querySelector("#autor-post")
	let conteudoPost = document.querySelector("#conteudo-post")
	let thumbPost = document.querySelector("#thumb-post")

	//Chama a função que verifica o link da imagem
	trataImagem(thumbPost,tituloPost,autorPost,conteudoPost)


}


//Tratamento do Link da Imagem 
function trataImagem(imagem,titulo,autor,conteudo){
	if(imagem.value.includes("http") || imagem.value.includes("https") ){
		//objeto para cada Post
		const post = {
		titulo:titulo.value,
		autor:autor.value,
		conteudo:conteudo.value,
		imagem:imagem.value
		}

		//adciona o objeto ao array
		posts.push(post)

		//chama função que armazena os dados em local storage
		armazenaPosts(posts)
		/*//chama função que adciona os posts no documento
		adcionaPosts(imagem,titulo,autor,conteudo)*/

		//função limpa os campos
		limpaCampos(titulo,autor,conteudo,imagem)
	}else{
		alert("Por favor verifique os campos, o valor inserido em 'Endereço da sua Imagem::' não é um endereço válido")

		//Limpa os campo imagem antes de retornar
		imagem.value = ""
		return
	}
}

function limpaCampos(imagem,titulo,autor,conteudo){
	//Limpa os campos após inculir no documento
	titulo.value = ""
	autor.value = ""
	imagem.value = ""
	conteudo.value = ""
}
let postagensNoLocalStorage = 'Postagens'
//Função que armazena o array de posts no local storage
function armazenaPosts(posts){
	const postsArray = JSON.stringify(posts)
	localStorage.setItem(postagensNoLocalStorage, postsArray);

	//Chama função que cria um Popup perguntando se deve continuar adcionando ou vizualizar postagens
	popupVizualizacao(posts)
	/*//função que abre a nova página
	passaValor()*/
}


//Função que abre o popup de vizualização
let i = 0;
function popupVizualizacao(posts){
	const sectionPopup = document.querySelector("#popup-section").style.display = 'flex'
	const popup = document.querySelector("#popup")
		popup.innerHTML += `<h2 class="titulo-popup">${posts[i].titulo}</h2><h4 class="autor-popup">${posts[i].autor}<h4><img class='imagem-popup' src='${posts[i].imagem}'><p class="conteudo-popup">${posts[i].conteudo}</p>`
		i++
}

//Função do botão continuar Postando
function postarMais(){
	const sectionPopup = document.querySelector("#popup-section").style.display = 'none'
}
//Função do botão Salvar
function salvarPostagens(){
	passaValor()
}
//Envia os dados para outra página
function passaValor(){
    window.location = "posts.html"
}

//adciona os posts no documento
function adcionaPostsNaPagina(){
	const postagens = JSON.parse(localStorage.getItem('Postagens'));
		const containerPost = document.querySelector("#container-de-posts")
		for(let i=0;i<postagens.length;i++){
		containerPost.innerHTML += `<h2 class="titulo">${postagens[i].titulo}</h2><h4 class="autor">${postagens[i].autor}<h4><img class='imagem' src='${postagens[i].imagem}'><p class="conteudo">${postagens[i].conteudo}</p>`
}
}


