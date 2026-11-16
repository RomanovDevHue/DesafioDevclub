let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

// () = Capsula teletransportadora

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor){

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
    // innerHTML = altera o conteúdo de um elemento HTML
    // src = colocar algo dentro do src da imagem
}

function lerfoto(input){
    let foto = input.files[0]

    console.log(foto.files[0])
 }
    let leitor = new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function(){
        await puter.ai.txt2img("transforme essa foto em um personagem de videogame com estilo de anime", leitor.result, 512, 512).then((resposta) => {
            personagem.src = resposta.data[0].url
        })
    }