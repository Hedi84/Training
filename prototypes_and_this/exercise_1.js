
const zoo = {
    cash: 4000,
    spend: function (amount) {
        if (this.cash < amount) {
            throw "Not enough money!";
        }
        this.cash -= amount;
        console.log(`Remaining funds: ${this.cash}`);
    }
};


var Animal = {
    init: function (name, species, hunger, animalType) {
      this.name = name,
      this.species = species,
      this.hunger = hunger,
      this.animalType = animalType,
      console.log(`created ${this.species} called ${this.name}, whose hunger is ${this.hunger}`)

    },

    feed: function () {
      switch(this.animalType) {
        case "big carnivore":
        console.log(`${this.name} has just eaten a zebra, yikes...`);
        zoo.spend(200);
        break;
        case "small carnivore":
        console.log(`${this.name} has just eaten a little mouse, that's sad.`)
        zoo.spend(200);
        break;
        case "big herbivore":
        console.log(`${this.name} has eaten so much grass.`)
        zoo.spend(500);
        break;
        case "small herbivore":
        console.log(`${this.name} has just eaten some berries and nuts, cute!`)
        zoo.spend(500);
        break;
      }
      this.hunger -= 10;
      console.log(`${this.name} now has a hunger of ${this.hunger}`)
    }

};



var lion = Object.create(Animal);
lion.init("Leo", "lion", 80, "big carnivore");
lion.feed();

var zebra = Object.create(Animal);
zebra.init("Zoe", "zebra", 100, "big herbivore");
zebra.feed();

var chinchilla = Object.create(Animal);
chinchilla.init("Chloe", "chinchilla", 2, "small herbivore");
chinchilla.feed();

var ferret = Object.create(Animal);
ferret.init("Fred", "ferret", 40, "small carnivore");
ferret.feed();
