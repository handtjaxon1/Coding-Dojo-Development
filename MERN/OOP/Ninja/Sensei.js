class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    };

    sayName() {
        console.log(this.name);
        return this;
    };

    showStats() {
        console.log("Name: " + this.name + ", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
};

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
};

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();