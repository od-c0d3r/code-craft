// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

/* 
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other
 first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
 You can mutate the Fighter objects.*/

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; };
    this.attak = (fighter) => {
        fighter.health = fighter.health - this.damagePerAttack;
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let gameOver = false;
    let turns = 1;
    let firstFighter = fighter1.toString() == firstAttacker ? fighter1 : fighter2;
    let secondFighter = firstFighter == fighter1 ? fighter2 : fighter1;

    // console.log('start match -------');

    while (!gameOver) {
        // console.log(`--- Turn ${turns} ---`);
        // console.log(`${firstFighter.toString()}(H:${firstFighter.health}) X ${secondFighter.toString()}(H:${secondFighter.health})`);
        firstFighter.attak(secondFighter);
        // console.log(`${firstFighter.toString()}(H:${firstFighter.health}) attacks(D:${firstFighter.damagePerAttack}) ${secondFighter.toString()}(H:${secondFighter.health})`);
        if (secondFighter.health <= 0) {
            gameOver = true;
            // console.log('first Fighter wins');
            return firstFighter.toString();
        };
        secondFighter.attak(firstFighter);
        // console.log(`${secondFighter.toString()}(H:${secondFighter.health}) attacks(D:${secondFighter.damagePerAttack}) ${firstFighter.toString()}(H:${firstFighter.health})`);

        if (firstFighter.health <= 0) {
            gameOver = true;
            // console.log('second Fighter wins');
            return secondFighter.toString();
        };
        turns = turns + 1;
    }
}

// uncoment the logs to have fun in the terminal :3

console.log((declareWinner(new Fighter("Harry", 5, 4), new Fighter("Harald", -2, 5), "Harald")));

