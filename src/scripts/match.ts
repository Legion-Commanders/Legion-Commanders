import Player from './player'

/** Represents a game match */
export default class Match {
    player1: Player
    player2: Player

    constructor(player1: Player, player2: Player) {
        this.player1 = player1
        this.player2 = player2
    }
}
