const quest = document.getElementById("questao")
const Box = document.getElementById("box")
const cont = document.getElementById("container")
const Score = document.getElementById("score")
const letras = ["a","b","c","d"]
let pontos = 0
let perg = 0


//Perguntas

const questoes = [
    {
        "questao": " Qual a montanha mais alta do mundo?",
        "respostas":[
            {
                "responder":"Monte Everest",
                "correto" : true
            },{
                "responder":"Mauna Kea",
                "correto":false
            },{
                "responder":"Dhaulagiri",
                "correto":false
            },{
                "responder":"Pico da Neblina",
                "correto":false
            }
        ]
    },{
        "questao":"Qual a maior floresta tropical do mundo?",
        "respostas":[
            {
                "responder":"Pantanal",
                "correto":false
            },{
                "responder":"Caatinga",
                "correto":false
            },{
                "responder": "Floresta Amazônica",
                "correto": true
            },{
                "responder":"Mata Atlântica",
                "correto":false
            }
        ]
    },{
        "questao":" Depois do futebol, qual o esporte mais popular no Brasil?",
        "respostas":[
            {
                "responder":"Esqui",
                "correto":false
            },{
                "responder":"Golfe",
                "correto":false
            },{
                "responder":"Vôlei",
                "correto":true
            },{
                "responder":"Baqueste",
                "correto":false
            }
        ]

    },{ "questao":"Qual destas substâncias faz parte da composição do vidro?",
        "respostas":[     
            {
                "responder":"Petróleo",
                "correto":false
            },{
                "responder":"Areia",
                "correto":true
            },{
                "responder":"Álcool",
                "correto":false
            },{
                "responder":"Fibra",
                "correto":false
            }
                
            
        ]
    },{
        "questao":"Quais as duas línguas mais faladas no mundo?",
        "respostas":[
            {
                "responder":"Inglês e mandarim chinês.",
                "correto":true
            },{
                "responder":"Inglês e espanhol",
                "correto":false
            },{
                "responder":"Mandarim chinês e francês",
                "correto":false
            },{
                "responder":"Inglês e português",
                "correto":false
            }
        ]
    },{
        "questao":"Qual o nome do líder da Coreia do Norte?",
        "respostas":[
            {
                "responder":"Kim Jong-Il",
                "correto":false
            },{
                "responder":"Kim Jong-un",
                "correto":true
            },{
                "responder":"Pak Pong-ju",
                "correto":false
            },{
                "responder":"Xi Jinping",
                "correto":false
            }
        ]
    },{
        "questao":"Qual é o país mais populoso do mundo?",
        "respostas":[
            {
                "responder":"Índia",
                "correto":false
            },{
                "responder":"Japão",
                "correto":false
            },{
                "responder":"EUA",
                "correto":false
            },{
                "responder":"China",
                "correto":true
            }
        ]
    },{
        "questao":"Qual é o idioma oficial do Canadá?",
        "respostas": [
            {
                "responder":"Inglês e espanhol",
                "correto":false
            },{
                "responder":"Inglês e francês",
                "correto":true     
            },{
                "responder":"Francês e espanhol",
                "correto":false
            },{
                "responder":"Francês e italiano",
                "correto":false
            }

        ]
    },{
        "questao":" Em que ano aconteceu o acidente na Usina Nuclear de Chernobyl?",
        "respostas":[
            {
                "responder":"1986",
                "correto":true
            },{
                "responder":"1983",
                "correto":false
            },{
                "responder":"1989",
                "correto":false
            },{
                "responder":"1980",
                "correto":false
            }
        ]
    },{
        "questao":"Em que ano o navio Titanic afundou?",
        "respostas":[
            {
                "responder":"1970",
                "correto":false
            },{
                "responder":"1910",
                "correto":false
            },{
                "responder":"1912",
                "correto":true
            },{
                "responder":"1900",
                "correto":false

            }
        ]
    }
]

//Inciar o jogo

function criar(){
    criarQuest(0)
}

function criarQuest(i){
    const button = Box.querySelectorAll("button")

    button.forEach(function(btn){
        btn.remove()
    })
    
    const questText = quest.querySelector("#questao-text")
    const questNum = quest.querySelector("#questao-nume")

    questText.textContent = questoes[i].questao
    questNum.textContent = i + 1


    questoes[i].respostas.forEach(function(responder, i){
        const template = document.querySelector(".template").cloneNode(true)
        const letBtn = template.querySelector(".btn")
        const textText = template.querySelector(".questao-resposta")

        letBtn.textContent = letras[i]
        textText.textContent = responder['responder']

        template.setAttribute("correto", responder["correto"])

        //Remover template class
        template.classList.remove("hide")
        template.classList.remove(".template")

        //Inserir as opções
        Box.appendChild(template)

        //evento de click

        template.addEventListener("click",function(){
            checar(this)

        })  

    })
             perg++

}

//Verificar resposta

function checar(btn){
    
    const btns = Box.querySelectorAll("button")

    btns.forEach(function(button){
        
        if(button.getAttribute("correto") == "true"){

            button.classList.add("errado")

            if(btn === button){
                pontos++
            }

        } else{
            button.classList.add("correct")
        }
    })
   
    //Avançar as perguntas
    proxPerg()


}

function proxPerg(){

    setTimeout(function(){

        if(perg >= questoes.length){
            
            msgFinal()
            return

        }

        criarQuest(perg)

    },1400)
}

//Mostrar a tela final

function msgFinal(){
        
    esconderScore()
    
    const resFinal = document.querySelector("#correto")
    resFinal.textContent = pontos
        
   
}

function esconderScore(){
    cont.classList.toggle("hide")
    Score.classList.toggle("hide")
}

//reiniciar o quizz

const reiniciar = document.querySelector("#restart")

reiniciar.addEventListener("click", function(){
    perg = 0
    esconderScore()
    criar()
})

window.addEventListener("beforeunload", function(e){
    e.returnValue = null
})

// Iniciar
criar()