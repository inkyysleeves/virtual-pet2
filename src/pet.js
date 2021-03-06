const pet = require("../src/pet");

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const DEAD_MESSAGE = "Your pet is dead"

function Pet(name, ) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
      },
    walk: function() {
      if (this.fitness + 4 <= MAXIMUM_FITNESS) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS;
      }
    },
    feed: function() {
      if (!this.isAlive()) {
        throw new Error(DEAD_MESSAGE);
      }
      if (this.hunger - 3 >= MINIMUM_HUNGER) {
        this.hunger -= 3;
      } else {
        this.hunger = MINIMUM_HUNGER;
      }
    },
    checkUp: function() {
      if (!this.isAlive()) {
        throw new Error(DEAD_MESSAGE);
      }
      if (this.hunger >= 5 && this.fitness <= 3) {
        return "I am hungry AND I need a walk";
      }
      if (this.fitness <= 3) {
        return "I need a walk";
      }
      if (this.hunger >= 5) {
        return "I am hungry";
      }
      if (!this.hunger >= 5 || !this.fitness <= 3) {
        return "I feel great!";
      }
    },

    isAlive: function() {
      if (this.fitness <= 0) {
        return false;
      }
      if (this.hunger >= 10) {
        return false;
      }
      if (this.age >= 30) {
        return false;
      } else {
        return true;
      }
    }
  };
}

module.exports = Pet;
