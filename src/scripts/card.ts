/** Represents a card */
export default class Card {
    name: string
    cost: number
    description: string

    /**
     * Creates a card.
     * @param cardName The card's name
     * @param cost The card's mana cost
     * @param description The card's description
     */
    constructor(cardName: string, cost: number, description: string) {
        this.name = cardName
        this.cost = cost
        this.description = description
    }
}

/** Represents a spell card. */
class Spell extends Card {
}

/** Represents a creature card */
class Creature extends Card {
    power: number
    healthPoints: number
    speed: number
    
    /**
     * Creates a creature card.
     * @param name The creature's name
     * @param cost The creature's mana cost
     * @param power The amount of damage dealt per hit
     * @param speed How fast the creature on the field
     * @param healthPoints The creature's starting health points
     */
    constructor(name: string, cost: number, description: string, power: number, speed: number, healthPoints: number){
        super(name, cost, description)
        
        this.power = power
        this.healthPoints = healthPoints
        this.speed = speed
     
    }
}