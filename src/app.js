import './routes.js';
import { Home , SeletcChoices, InitGame, EndGame} from "./script/main.js"

$main.routes('/','./views/home.html', Home)
     .routes('/select-choices','./views/choices.html', SeletcChoices)
     .routes('/game','./views/game.html', InitGame)
     .routes('/endgame','./views/game-over.html', EndGame)
    .load()


