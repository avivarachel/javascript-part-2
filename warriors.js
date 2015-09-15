// This is a comment. WARRIORS!

function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.weapon = "wooden sword";
    this.power = Math.floor((Math.random() * 100) + 1);
    this.level = 1;
}

Warrior.prototype = {
    fight: function() {console.log(this.name + " rushes to the arena with " + this.weapon);
                      },
        faceoff: function(opponent) {
            if (opponent.power > this.power) {
                console.log(opponent.name + " dominated! " + this.name + " is seeing stars.");
            }
            else if (opponent.power < this.power) {
                console.log(this.name + " just barely won this time!  " + opponent.name + " can't believe his luck ");
            } else { 
                console.log(" The warriors are feeling peaceful today. ");
            }
        },
}

var jer = new Warrior("Jerry", "M");
var el = new Warrior("Elaine", "F");
var kra = new Warrior("Kramer", "M");
var geo = new Warrior("George", "M");
var newm = new Warrior("Newman", "F");



console.log(el, jer);
el.fight();
jer.faceoff(el);