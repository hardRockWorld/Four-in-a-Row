class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Returns the active player.
     * @return {object} Player - the active player.
     */
    get activePlayer() {
        return this.players.find( player => player.active );
    }

    /**
     * Creates two player objects
     * @return {array} An array of two player objects
     */
    createPlayers() {
        const players = [
            new Player('Player 1', 1, '#e15258', true),
            new Player('Player 2', 2, '#e59a13')
        ];

        return players;
    }

    /**
     * Gets game ready for play
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

}