
import { question } from "./model/Question.js";
import { Quiz } from "./model/Quiz.js";
import { UI } from "./model/UI.js";
import { User } from "./model/User.js";



/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */
function renderQuestion(quiz, ui){
    if(quiz.isEnded()){
        ui.playEnd(quiz.score, quiz.jugador)
    }else{   
        ui.playGame()
        .showinfo(quiz.jugador)
        .showQuestion(quiz.getQuestionIndex().question)
        .showChoices(quiz.getQuestionIndex().choices, (choices)=>{
            quiz.guess(choices)
            renderQuestion(quiz, ui)
        })
        .showProgress(quiz.indexCurrentQuestion + 1, quiz.question.length)
    }
}


function main(jugador){
    const newJugador = new User(jugador)
    const quiz = new Quiz(question, newJugador.name)
    const ui = new UI
    renderQuestion(quiz, ui)
}


const play = document.querySelector('#play')
play.addEventListener('click', () => {
    const jugador = document.querySelector('#jugador')
    if(jugador.value === "") return console.log('deves ingresar un nobre para empezar')
    main(jugador.value)
})

