
import { Question } from "./model/Questions.js";
import { questionsData } from "./data/data.js";
import { Quiz } from "./model/Quiz.js";
import { Game } from "./model/Game.js";
import { UI } from "./model/UI.js";

const questions = questionsData.map(question => new Question(question.question, question.choices, question.answer, question.categoty))
const quiz = new Quiz(questions)


  /**
   * ------------------------------------------------------------------------
   * Function Home Definition
   * ------------------------------------------------------------------------
   */
export function Home() {
    const d = document
    const next = d.querySelector('#next')
    
    d.addEventListener('click', e => {
        e.preventDefault()
        
        const cardSelect = e.target.dataset.card
        const cardAll = [...d.querySelectorAll('[data-card]')]
        
        if (cardSelect === undefined) return;
        const card = e.target
        cardAll.forEach(card => card.classList.remove('choices-card-select'))
        card.classList.add('choices-card-select')
        
    })
    
    
    next.addEventListener('click', e => {
        e.preventDefault()
        const playerName = d.querySelector('#player-name')
        const cardSelect = d.querySelector('.choices-card-select .choices-card-title')
        
        if (playerName.value === '' || cardSelect === null) {
            console.log('Deves llenar todos los requerimientos para enpezar')
            return;
        }
        $main.setStorage('gameinfo', {
            player: playerName.value,
            choicesQuestion: cardSelect.textContent.toLowerCase(),
            totalQuestion: quiz.lengthQuestions(cardSelect.textContent.toLowerCase())
            
        }) 
        location.hash = '/select-choices'
        
    })
    
    
}
  /**
   * ------------------------------------------------------------------------
   * Function SeletcChoices Definition
   * ------------------------------------------------------------------------
   */
export function SeletcChoices(){
    const d = document
    const playGame = d.querySelector('#play-game')
    const btnMore = d.querySelector('#btn-more')
    const btnLess = d.querySelector('#btn-less')
    const totalQuestion = d.querySelector('#total-question')
    const infoQuestion = d.querySelector('#question-info')
    
    
    const data = $main.getStorage('gameinfo')
    infoQuestion.textContent = `${data.choicesQuestion} has ${data.totalQuestion} questions available`
    
    
    
    let numero = null
    numero = parseInt(totalQuestion.value, 10)
    
    btnLess.addEventListener('click', e =>{
        e.preventDefault()
        
        if (totalQuestion.value === '0'){
            totalQuestion.value = '0'
            numero = parseInt(totalQuestion.value, 10)
        }
        
        if(parseInt(totalQuestion.value) > 0){
            numero = parseInt(totalQuestion.value, 10) - 1
            totalQuestion.value = numero
        }
        
    })
    btnMore.addEventListener('click', e =>{
        e.preventDefault()
        
        if(parseInt(totalQuestion.value) < data.totalQuestion){
            numero = parseInt(totalQuestion.value, 10) + 1
            totalQuestion.value = numero
        }
        
    })
    
    playGame.addEventListener('click', e => {
        e.preventDefault()
        
        if (totalQuestion.value === '' || totalQuestion.value === '0') {
            console.log('Deves llenar todos los requerimientos para enpezar')
            return;
        }
        
        
        $main.setStorage('gameinfo', {
            player: data.player,
            choicesQuestion: data.choicesQuestion,
            totalQuestion: data.totalQuestion,
            questionsToAnswer : parseInt(totalQuestion.value, 10)
        }) 
        location.hash = '/game'
        
    })
    
    
}
/**
 * ------------------------------------------------------------------------
 * Function InitGame Definition
 * ------------------------------------------------------------------------
 */
export function InitGame(){
    const data = $main.getStorage('gameinfo')
    
    const questionsSelect = quiz.getCategory(data.choicesQuestion)
    const game = new Game(questionsSelect, data.player, data.questionsToAnswer)
    const ui = new UI

    Render(ui,game)
    
    /**
     * 
     * @param {UI} ui 
     * @param {Game} game 
     */
    function Render(ui, game){
        const currentQuestion = game.getQuestinonNext()
        
        if(currentQuestion){
            ui.showPlayer(game.player)
            ui.showQuestion(currentQuestion.question)
            ui.showQuestionTotal(game.toAnswer.length, game.nextQuestion + 1)
            ui.showChoices(currentQuestion.choices, (choice)=> {
                game.guess(choice)
                Render(ui,game)
            })
        }else {
            $main.setStorage('scorePlayer', {
                score : game.score,
                player: game.player
            })
            location.hash = '/endgame'
        }
        
    }
    
}
/**
   * ------------------------------------------------------------------------
   * Function EndGame Definition
   * ------------------------------------------------------------------------
 */
export function EndGame() {
    const d = document;
    
    const newGame = d.querySelector('#new-game');
    const replayGame = d.querySelector('#replay-game');
    const dataOfGame = $main.getStorage('scorePlayer')

    const ui = new UI

    ui.showInfoEndGame(dataOfGame.score, dataOfGame.player)

    newGame.addEventListener('click', e => {
        e.preventDefault();
        $main.setStorage('gameinfo', {}) 
        location.hash = '/';
    })
    
    replayGame.addEventListener('click', e => {
        e.preventDefault();
        location.hash = '/game';
    })
    
}








