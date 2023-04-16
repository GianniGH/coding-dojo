class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.resilience = res;
    }
    call(player, target){
        console.log(`${player} has called his card ${this.name} against ${target}`)
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}`)
        target.power -= this.power
        target.resilience -= this.resilience
        target.power <= 0 || target.resilience <=0 ? console.log(`${this.name} has eliminated ${target.name}`):
        console.log(`${target.name} has been left with power:${target.power} and resilience:${target.resilience}`)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target) {
        if( target instanceof Unit ) {
            console.log(`${this.name} is been used in ${target.name}: ${this.text}`)
        this.stat = 'resilience' ? target.resilience += this.mag : target.power += this.mag
        console.log(
            `the stats of ${target.name} has change to power: ${target.power} / resilience: ${target.resilience}`)
        } else {
            throw new Error( "Target must be a Unit!" );
        }
    }
}

//NINJA UNIT CARDS
const ninjaRedUnit = new Unit('Ninja Red Belt', 3, 3, 4)
const ninjaBlackUnit = new Unit('Ninja Black Belt', 4, 5, 4)

// EFFECT CARDS
const algorithmEffect = new Effect('Difficult Algorithm', 2, 
                        'increase target resistance by 3', 'resilience', +3)
const rejectEffect = new Effect('Refusal of unmanaged promise', 1,
                    'increase target resistance by 2', 'resilience', -2)
const programmingEffect = new Effect('Pair programming', 2, 
                        'increase the power of the target by 2', 'power', +2)

//GAME SIMULATION 
ninjaRedUnit.call('Player1', 'Player2')
algorithmEffect.play(ninjaRedUnit)

ninjaBlackUnit.call('Player2', 'Player1')
rejectEffect.play(ninjaRedUnit)
programmingEffect.play(ninjaRedUnit)

ninjaRedUnit.attack(ninjaBlackUnit)

//