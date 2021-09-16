// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health
    this.strength = strength
  }
  attack () {
    return this.strength
  }
  receiveDamage (theDamage){
    this.health -= theDamage
    //this.health = this.health - theDamage (same method as previous line)
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super (health, strength)
    this.name = name
  }
  receiveDamage (theDamage){
    this.health -= theDamage
    if (this.health > 0){
      return (`${this.name} has received ${theDamage} points of damage`)
    } else { 
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry (){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
 receiveDamage (theDamage){
  this.health -= theDamage
  if (this.health > 0){
    return (`A Saxon has received ${theDamage} points of damage`)
  } else { 
    return 'A Saxon has died in combat'
  }
 } 
}

// War
class War {
  constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking) 
  }

  addSaxon (saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let randomSaxon = new Saxon();
    let randomViking = new Viking();
    randomSaxon.receiveDamage(theDamage) === randomViking.attack()

    if (randomSaxon.receiveDamage(theDamage) <= 0){
      this.saxonArmy.pop(randomSaxon)
    };
    return // result of calling receiveDamage() = to viking strength
  }
  saxonAttack(){

  }

  showStatus (){}
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
