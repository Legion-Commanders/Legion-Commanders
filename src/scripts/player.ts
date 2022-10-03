import Card from './card'

/** Represents the player. */
export default class Player {
    deck: Array<Card>

    /** Initializes the player. */
	constructor() {
        this.deck = []
	}
}
