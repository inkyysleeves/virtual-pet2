const Pet = require("../src/pet");
describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});
it("sets the name property", () => {
  const pet = new Pet("Fido");

  expect(pet.name).toEqual("Fido");
});
it("sets the age property", () => {
  const pet = new Pet();
  expect(pet.age).toEqual(0);
});
describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it("sets the hunger property", () => {
    const pet = new Pet();
    expect(pet.hunger).toEqual(0);
  });
});
describe("growUp affects the hunger", () => {
  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });
  it("sets the fitness property", () => {
    const pet = new Pet();
    expect(pet.fitness).toEqual(10);
  });
});
describe("growUp affects the fitness", () => {
  it("grow up decreases the fitness by 3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});
describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("fido");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});
describe("feed", () => {
  it("decreases hunger by 3", () => {
    const pet = new Pet("fido");

    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });
  it("decreases hunger to a minimum of 0", () => {
    const pet = new Pet("fido");

    pet.hunger = 2
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});
