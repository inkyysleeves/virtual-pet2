const pet = require("../src/pet");

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name, age) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  Pet.prototype.walk = () => {
    if (this.fitness + 4 <= MAXIMUM_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  };
  Pet.prototype.feed = () => {
    if (this.hunger - 3 >= MINIMUM_HUNGER) {
      this.hunger -= 3;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
  };
}
module.exports = Pet;
