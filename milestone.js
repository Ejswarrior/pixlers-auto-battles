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
let playButton = document.getElementById('autoplay')



let weapons = {

    woodSword: {
        weaponName: 'Wood Sword',
        attack: 1
    },
    ironSword: {
        weaponName:'Iron Sword',
        attack: 2
    },
    steelSword: {
        weaponName: 'Steel Sword',
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
    },

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
    },

}


const player1 = {

        name:'Erik',
        inventory:{
        armor: 0,
        weapon: weapons.woodSword.attack,
        weaponName: weapons.woodSword.weaponName,
        },
        stats:{
            health: 100,
            defense: 0,
            attack: weapons.woodSword.attack
            },
        
}

const enemies = {
borgor: {

    

        name: 'borgor',
        stats: {
        health: 40,
        attack: 1,
        defense: 0,
        },
        inventory: {
        armor:0,
        weapon: weapons.ironSword.attack,
        weaponName: weapons.ironSword.weaponName
        }

    
},
Funedad : {

    name: 'Funedad',
    stats: {
    health: 50,
    attack: 2,
    defense: 0,
    },
    inventory: {
    armor:0,
    weapon: weapons.steelSword.attack,
    weaponName: weapons.steelSword.weaponName
    }
}
   
}
let playerHealthTag = document.getElementById('playerHealthTag')
let playerAttackTag = document.getElementById('playerAttackTag')
let playerWeaponTag = document.getElementById('playerWeaponTag')


let enemyHealthTag = document.getElementById('enemyHealthTag')
let enemyAttackTag = document.getElementById('enemyAttackTag')
let enemyWeaponTag = document.getElementById('enemyWeaponTag')

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('playerName').textContent = player1.name
    playerHealthTag.textContent = player1.stats.health
    playerAttackTag.textContent = player1.stats.attack
    playerWeaponTag.textContent = player1.inventory.weaponName

    document.getElementById('enemyName').textContent = enemies.borgor.name
    enemyHealthTag.textContent = enemies.borgor.stats.health
    enemyAttackTag.textContent = enemies.borgor.stats.attack
    enemyWeaponTag.textContent = enemies.borgor.inventory.weaponName
})


let player1Attack = player1.stats.attack 
player1Attack = player1.inventory.weapon + 2



console.log(player1Attack)
console.log(this.name)

function bossfights(enemyType){


let enemyAttack = enemyType.stats.attack
    enemyAttack = enemyType.inventory.weapon

while(player1.stats.health >= 0 && enemyType.stats.health >= 0){

    if(player1.stats.health >= 0 && enemyType.stats.health >= 0){

        player1.stats.health -= enemyAttack
        enemyType.stats.health -= player1Attack
        playerHealthTag.textContent -= enemyAttack
        enemyHealthTag.textContent -= player1Attack
        console.log(`The player has ${player1.stats.health} health and the enemy has ${enemyType.stats.health}`)

    }

    if(enemyType.stats.health <= 0){

        console.log(`${player1.name} wins!!
        Congrats! You looted an ${enemyType.inventory.weaponName}`)
        player1.inventory.weapon = enemyType.inventory.weapon
        player1.inventory.weaponName = enemyType.inventory.weaponName
        player1Attack = player1.inventory.weapon + 2
        playerWeaponTag.textContent = player1.inventory.weaponName
        console.log(player1.inventory.weapon)
        console.log(player1Attack)
    }

}


}


playButton.addEventListener('click', function(){
bossfights(enemies.borgor)
})




