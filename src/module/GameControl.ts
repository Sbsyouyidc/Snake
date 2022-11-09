import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';


export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel
    direction: string = ''
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    init() {
        //调用者为document，里面的this指向的是dom中的dirction不是class里面的
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    keydownHandler(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key
    }
}