import Phaser from 'phaser'

export default class MatchScreen extends Phaser.Scene {

    constructor() {
        super('MatchScreen')
    }

    init(data: {}) {
        console.log(data)
    }

    preload() {
        this.load.image('match-background', 'assets/test.png')
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'match-background')
    }
}
