/**
 * ------------------------------------------------------------------------
 * Class UI
 * ------------------------------------------------------------------------
 */
export class UI {
    /**
     * 
     * @param {string} player 
     */
    showPlayer(player){
        const namePlayer = document.querySelector('#player')
        namePlayer.textContent = `Palyer: ${player}` 
    }
    
    /**
     * 
     * @param {number} questionTotal 
     * @param {number} questionCurrent 
     */
    showQuestionTotal(questionTotal, questionCurrent){
        const info = document.querySelector('#info-question')
        info.textContent = `Question ${questionCurrent} of ${questionTotal}` 
        
    }

    /**
     * 
     * @param {string} question 
     */
    showQuestion(question){
        const titleQuestion = document.querySelector('#title-question')
        titleQuestion.textContent = question
    }
    
    
    /**
     * 
     * @param {string[]} choices 
     * @param {function} callback 
     */
    showChoices(choices, callback){
        const container = document.querySelector('#choices-container');
        const fragment = document.createDocumentFragment();
        container.innerHTML = "";
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'btn-answer';
            button.textContent = choice;
            button.addEventListener('click',()=> callback(choice))
            fragment.appendChild(button)
        })

        container.appendChild(fragment)

    }
}