import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';


export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel
    direction: string = ''
    islive: boolean = true
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
        this.run()
    }

    run() {
        let Y = this.snake.Y
        let X = this.snake.X
        switch (this.direction) {
            case 'Up':
            case 'ArrowUp':
                Y -= 10
                break
            case 'Down':
            case 'ArrowDown':
                Y += 10
                break;
            case 'Right':
            case 'ArrowRight':
                X += 10
                break
            case 'Left':
            case 'ArrowLeft':
                X -= 10
                break;
        }
        this.checkEat(X, Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {
            alert(error)
            this.islive = false
        }
        /*  setTimeout(() => {
                console.log(this);
                this.run()
            }, 330 - (this.scorePanel.level) * 30) */
        //run()是普通函数，this由windows调用
        //如果是匿名函数，this是继承上下文的this
        this.islive && setTimeout(this.run.bind(this), 330 - (this.scorePanel.level) * 30)
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log('吃到');
            this.food.change()
            this.snake.addBody()
            this.scorePanel.addScore()
        }
    }
}