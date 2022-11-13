export default class Snake {
    head: HTMLElement
    body?: HTMLCollection
    element: HTMLElement
    constructor() {
        this.head = document.querySelector('#snake>div')!
        this.element = document.querySelector('#snake')!
        this.body = this.element.getElementsByTagName('div')

    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙')
        }
        console.log(value);

        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙')
        }
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

