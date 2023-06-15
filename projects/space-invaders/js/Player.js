/** @type {HTMLCanvasElement} */
export default class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;

    constructor(canvas, velocity, bulletController) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 75;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = './images/player.png'

        document.addEventListener('keydown', this.keydown)
        document.addEventListener('keyup', this.keyup)
    }

    keydown = (e) => {
        const key = e.code
        if (key === 'ArrowRight') {
            this.rightPressed = true;
        } else if (key === 'ArrowLeft') {
            this.leftPressed = true;
        } else if (key === 'Space') {
            this.shootPressed = true;
        }
    }
    keyup = (e) => {
        const key = e.code
        if (key === 'ArrowRight') {
            this.rightPressed = false;
        } else if (key === 'ArrowLeft') {
            this.leftPressed = false;
        } else if (key === 'Space') {
            this.shootPressed = false;
        }
    }


    draw(ctx) {
        if (this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10)
        }
        this.move()
        this.collideWithWalls()
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    move() {
        this.rightPressed && (this.x += this.velocity)
        this.leftPressed && (this.x -= this.velocity)
    }
    collideWithWalls() {
        if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width
        } else if (this.x < 0) {
            this.x = 0;
        }
    }
}