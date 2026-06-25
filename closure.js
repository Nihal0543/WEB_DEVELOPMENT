function createGame() {
    let score = 0;
    function incrementScore(points) {
        score += points;
        console.log(`+${points} pts`);
    }
    function decrementScore(points) {
        score -= points;
        console.log(`-${points} pts`);
    }
    return {
        incrementScore,
        decrementScore,
        getScore: () => score
    };
}

const game = createGame();
game.incrementScore(10);
game.decrementScore(5);
console.log('Current Score: ' + game.getScore());