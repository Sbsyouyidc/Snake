export default class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    upLevel: number
    constructor(maxLevel: number = 10, uplevel: number = 10) {
        this.maxLevel = maxLevel
        this.upLevel = uplevel
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '' //转化成字符串
        this.score % this.upLevel == 0
            && this.levelUp()
    }

    levelUp() {
        this.level < this.maxLevel && (this.levelEle.innerHTML = ++this.level + '');
    }
}