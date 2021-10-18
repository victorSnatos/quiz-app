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
            card: cardSelect.textContent
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
    
    playGame.addEventListener('click', e => {
        e.preventDefault()
        
        if (totalQuestion.value === '') {
            console.log('Deves llenar todos los requerimientos para enpezar')
            return;
        }
        console.log($main.getStorage('gameinfo'))
        console.log(totalQuestion.value)
    
        // location.hash = '/select-choices'
            
    })

    
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

        if(parseInt(totalQuestion.value) < 10){
            numero = parseInt(totalQuestion.value, 10) + 1
            totalQuestion.value = numero
        }
        
    })
    
    

}