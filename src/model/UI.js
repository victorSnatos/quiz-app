const d = document;

export class UI {

    /**
     * 
     * @returns {UI}
     */
    playGame() {
        const container = d.querySelector('.container-quiz')
        const play = d.querySelector('#playGame').content
        container.innerHTML = '';
        const clone = play.cloneNode(true)
        container.appendChild(clone)
        return this
    }
    
    /**
     * 
     * @param {string} jugador 
     * @returns {UI}
     */
    showinfo(jugador){
        const jugadorContent = d.querySelector('#name-jugador')
        jugadorContent.textContent = jugador
        return this
    }

    /**
     * 
     * @param {string} question 
     * @returns {UI}
     */
    showQuestion(question) {
        const questionContent = d.querySelector('#question')
        questionContent.textContent = question
        return this
    }
    
    /**
     * 
     * @param {string[]} choices 
     * @param {function} callback 
     * @returns {UI}
     */
    showChoices(choices, callback) {
        const choicesContent = d.querySelector('#choices')
        const fragment = d.createDocumentFragment();
        choices.forEach(choice => {
            const button = d.createElement('button')
            button.textContent = choice            
            button.className = 'button-question'
            button.addEventListener('click',()=> callback(choice))
            fragment.appendChild(button)
        })
        
        choicesContent.appendChild(fragment)
        return this
    }
    
    
    /**
     * 
     * @param {number} indexQuestion 
     * @param {number} questionTotal 
     */
    showProgress(indexQuestion, questionTotal){
        const progressContent = d.querySelector('#progress')
        progressContent.textContent = `question ${indexQuestion} of ${questionTotal}`
    }

    
    /**
     * 
     * @param {number} score 
     * @param {string} jugador 
     */
    playEnd(score, jugador){
        const endPlay = d.querySelector('#quiz-score').content
        const container = d.querySelector('.container-quiz')
        
        container.innerHTML = ''

        const clone = endPlay.cloneNode(true)
        clone.querySelector('.score-total').textContent = score
        clone.querySelector('.jugador').textContent = jugador

        container.appendChild(clone)
        
    }
    
}
