import Card from './card'

/** Represents the player. */
export default class Player {
	healthPoints: number
	manaPoints: number
    collection: Array<Card>

    /**
     * Initializes the player.
     * @param healthPoints The player's starting health
     * @param mana The player's starting mana
     */
	constructor(healthPoints: number, mana: number) {
		this.healthPoints = healthPoints
		this.manaPoints= mana
        this.collection = []
	}
}