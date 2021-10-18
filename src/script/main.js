import { Question } from "./model/Questions.js";
import { questionsData } from "./data/data.js";
import { Quiz } from "./model/Quiz.js";

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
        const questions = questionsData.map(question => new Question(question.question, question.choices, question.answer, question.categoty))
        const quiz = new Quiz(questions)
        
        $main.setStorage('gameinfo', {
            player: playerName.value,
            choicesQuestion: cardSelect.textContent.toLowerCase(),
            totalQuestion: quiz.lengthQuestions(cardSelect.textContent.toLowerCase())
            
        }) 
        location.hash = '/select-choices'
        
    })
    

}



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
        
        if (totalQuestion.value === '') {
            console.log('Deves llenar todos los requerimientos para enpezar')
            return;
        }
        
        location.hash = '/game'
    })
    
    
}    
