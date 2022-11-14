export default class Snake {
    head: HTMLElement
    body: HTMLCollection
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
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            console.log((this.body[1] as HTMLElement).offsetLeft);
            console.log(value);

            if (value > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10;
            } else {
                // 向左走
                value = this.X + 10;
            }
        }
        this.moveBody()
        // this.checkHeadBody()
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙')
        }
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody()
        // this.checkHeadBody()
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    moveBody() {
        for (let index = this.body.length - 1; index > 0; index--) {
            let X = (this.body[index - 1] as HTMLElement).offsetLeft
            let Y = (this.body[index - 1] as HTMLElement).offsetTop;
            (this.body[index] as HTMLElement).style.left = X + 'px';
            (this.body[index] as HTMLElement).style.top = Y + 'px'
        }
    }
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}

