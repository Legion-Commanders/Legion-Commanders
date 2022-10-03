import Phaser from 'phaser'

/** The first screen seen by the player... */
export default class MainScreen extends Phaser.Scene {

    constructor() {
        super('MainScreen')
    }

	preload() {
        this.load.image('play-button', 'play-button.png')
    }

    create() {
        const particles = this.add.particles('play-button')
        const playButton = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'play-button')
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerup', () => {
                this.scene.start('MatchScreen')
            })

        particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        }).startFollow(playButton)
    }
}
