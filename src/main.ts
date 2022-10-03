import Phaser from 'phaser'
import MainScreen from './scenes/MainScreen'
import MatchScreen from './scenes/MatchScreen'

export default new Phaser.Game({
	width: 800,
	height: 450,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: [MainScreen, MatchScreen]
})
