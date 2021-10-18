import { Home , SeletcChoices} from "./script/main.js"

(
    /**
     * 
     * @param {Window} global 
     * @param {function} callback 
     */
    function(global, callback){
    if(!global.$main){
        global.$main = callback()
        $main._Storage()
        global.addEventListener('hashchange', $main.load)
        global.addEventListener('load', $main.load)
    }

})(window, function(){
    const Routes = {}
    const container = document.querySelector('#main')
    const Storage = JSON.parse(localStorage.getItem('Storage'))

    
    
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
    
    main._Storage = function(){
        const local = JSON.parse(localStorage.getItem('Storage'))
        if(!local){
            localStorage.setItem('Storage', JSON.stringify({}))
        }
    }
    
    /**
     * 
     * @param {string} key 
     * @param {object} data 
     */
    main.setStorage = function(key, data){
        Storage[key] = data
        localStorage.setItem('Storage', JSON.stringify(Storage))
    }
    
    /**
     * 
     * @param {string} key 
     * @returns {object}
     */
    main.getStorage = function(key){
        return Storage[key]
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


$main.routes('/','./views/home.html', Home)
     .routes('/select-choices','./views/choices.html', SeletcChoices)
     .routes('/game','./views/game.html', null)
    .load()









