
const pressButton = () => { 

const formUser = document.getElementById("formulario") 

const postTittle = document.getElementById("titulo-post") 

const autorTittle = document.getElementById("autor-post") 

const postText = document.getElementById("conteudo-post")

const post = {
tittle: postTittle.value, 
autor: autorTittle.value,
text: postText.value  

}
let arrayObjetos = []
arrayObjetos.push(post)
console.log(arrayObjetos)
postTittle.value =""
autorTittle.value =""
postText.value =""

const container = document.getElementById("container-de-posts")
container.innerHTML += "<h2>"+post.tittle +"</h2>" 
container.innerHTML += "<h3>"+post.autor+"</h3>"
container.innerHTML += "<p>"+post.text+"</p>"

}
