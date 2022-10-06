import Card from './card'
import PlayerImage from '../assets/player.png'

/** Represents the player. */
export default class Player {
    deck: Array<Card>
    image: string

    /** Initializes the player. */
	constructor() {
        this.deck = []
        this.image = PlayerImage
	}
}
