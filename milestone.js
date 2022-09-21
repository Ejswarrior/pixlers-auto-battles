//Creating an Autobattler
//Create a player object to have the stats and things we need.
//Create a screen to name player
//button to start the battle. When it start each player starts attacking each other

//
//Stats: 
//Attack stat: This can be simple as if you have 14 attack it will reduce 14 defense and health
//Defense stat: Like extra hitpoints. Stops attacks from reducing health
// Health stat: Your health is wether you are alive or not. Reducing health to zero kills you

// Things to learn:
// How to add scenes to JS. Ex: When player defeats the enemy. He gets a status screen and then the background will change and boss changes
// Animation once project is done and I have time
// OOP

let attackTurn;



let player1 = {

        name:'Erik',
        stats:{
        health: 100,
        defense: 0,
        attack: player1.inventory.woodSword
        },
        inventory:{
        armor: armor,
        weapon: weapons.woodSword.attack,
        },
    
}


class EnemyPlayer{

    constructor(name, health, defense, armor, weapon){

        this.name = name;
        this.health = health;
        this.defense = defense;
        this.armor = armor;
        this.weapon = weapon;

    }
}

let weapons = {

    woodSword: {
        attack: 1
    },
    ironSword: {
        attack: 2
    },
    steelSword: {
        attack: 4
    },
    battleAxe: {
        attack: 8
    },
    warHammer: {
        attack: 16
    },
    steelGreatSword : {
        attack: 32
    },
    swordOfInfinitePower: {
        attack: 999
    }

}

let armor = {   

    woodArmor: {
        defense: 2
    },
    ironArmor:{
        defense: 4
    },
    steelArmor: {
        defense: 8
    },
    carbonArmor: {
        defense : 16
    },
    tungstenArmor: {
        defense: 32
    },
    titaniumArmor: {
        defense: 62
    },
    armorOfGods: {
        defense: 999
    }

}





