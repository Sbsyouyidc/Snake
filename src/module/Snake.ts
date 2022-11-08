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
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}
