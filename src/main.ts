import Phaser from 'phaser'
import MainScreen from './scenes/MainScreen'

const config: Phaser.Types.Core.GameConfig = {
	width: 800,
	height: 450,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: [MainScreen]
}

export default new Phaser.Game(config)
