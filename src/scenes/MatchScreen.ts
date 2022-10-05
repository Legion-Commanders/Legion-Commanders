import Phaser from 'phaser'
import Background from '../assets/background.png'

export default class MatchScreen extends Phaser.Scene {

    constructor() {
        super('MatchScreen')
    }

    init(data: {}) {
        console.log(data)
    }

    preload() {
        this.load.image('background', Background)
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')
    }
}
