import Phaser from 'phaser'
import Match from '../scripts/match'

import BackgroundImage from '../assets/background.png'

export default class MatchScreen extends Phaser.Scene {
    match: Match

    constructor() {
        super('MatchScreen')
    }

    init(data: {match: Match}) {
        this.match = data.match
    }

    preload() {
        this.load.image('background', BackgroundImage)
        this.load.image('player1', this.match.player1.image)
        this.load.image('player2', this.match.player2.image)
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')

        const x = 60, y = 300
        this.add.image(x, y, 'player1')
        const player2Image = this.add.image(this.cameras.main.width - x, y, 'player2')
        player2Image.flipX = true
    }
}
