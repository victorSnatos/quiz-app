
(
    /**
     * 
     * @param {Window} global 
     * @param {function} callback 
     */
    function(global, callback){
    if(!global.$main){
        global.$main = callback()
        global.addEventListener('hashchange', $main.load)
        global.addEventListener('load', $main.load)
    }

})(window, function(){
    const Routes = {}
    const container = document.querySelector('#main')

    const main = {}
    /**
     * 
     * @param {string} route 
     * @param {string} url 
     * @param {function} callback 
     * @returns {object}
     */
    main.routes = function(route, url , callback){
        Routes[route] = {url, callback}
        return this
    }
    
    
    main.load = function(){
        const hash = location.hash.substring(1) || '/'
        const xhr = new XMLHttpRequest();
        const route = Routes[hash]
        if(route){
            xhr.addEventListener('load', function(){
                container.innerHTML = this.responseText
                route.callback === null ? null : route.callback()
            })
            xhr.open('GET', route.url, true)
            xhr.send(null)

        }
    }
    return main
})


$main.routes('/','./views/home.html',null)
     .routes('/game','./views/game.html', null)
    .load()


function Main (){
    const play = document.querySelector('#play')
    play.addEventListener('submit', e =>{
        e.preventDefault();
        location.hash = '/game'
    })
}







