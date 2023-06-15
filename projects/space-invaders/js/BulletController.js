/** @type {HTMLCanvasElement} */
import Bullet from "./Bullet.js";

export default class BulletController {
    bullets = [];
    timeTillNetBulletAllowed = 0;
    constructor(canvas, maxBulletsAtTime, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletsAtTime = maxBulletsAtTime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;
        this.x = 0;
        this.y = 0;
        this.width = 2;
        this.height = 5;
        this.shootSound = new Audio('../sounds/shoot.wav');
        this.shootSound.volume = 0.01;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter(bullet => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height)
        this.bullets.forEach((bullet) => {
            bullet.draw(ctx)
        })
        if (this.timeTillNetBulletAllowed > 0) {
            this.timeTillNetBulletAllowed--;
        }
    }

    collideWith(sprite) {
        const bulletThitHitSpriteIndex = this.bullets.findIndex(bullet => bullet.collideWidth(sprite))
        if (bulletThitHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThitHitSpriteIndex, 1);
            return true
        }
        return false;
    }

    shoot(x, y, velocity, timeTillNetBulletAllowed = 0) {
        if (this.timeTillNetBulletAllowed <= 0 && this.bullets.length < this.maxBulletsAtTime) {
            const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
            this.bullets.push(bullet)
            this.bullets
            if (this.soundEnabled) {
                this.shootSound.currentTime = 0;
                this.shootSound.play()
            }
            this.timeTillNetBulletAllowed = timeTillNetBulletAllowed;
        }

    }
}