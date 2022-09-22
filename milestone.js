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

// each turn the enemy and player take turns attacking and loosen the health of the player 


let bossTurn = 0;


const player1 = {

        name:'Erik',
        stats:{
            health: 100,
            attack: 99
            },
        
}

const enemies = [
    
{
            name:'Borgor the half Demon',
                stats: {
                    health: 40,
                    attack: 3,
                },
                
        }
,
        {
            name: 'Funedad the tree spirit',
                stats: {
                    health: 50,
                    attack: 4,
                },
        }
,
        {
            name: 'Xeindryt The Scary',
                stats: {
                    health: 50,
                    attack: 4,
                },
        }
        ,
        {
            name: 'Cyrril Lord Of The Red',
                stats: {
                    health: 70,
                    attack: 6,
                },
        }
        ,
        {
            name: 'Galzrei The Gifted One',
                stats: {
                    health: 80,
                    attack: 9,
                },
        }
        ,
        {
            name: 'Barurrat Eater Of All',
                stats: {
                    health: 90,
                    attack: 13,
                },
        }
        ,
        {
            name: 'Chevro Destroyer Of Life',
                stats: {
                    health: 120,
                    attack: 18,
                },
        }
    ]




let attackTurn = 1;
let attackButton = document.getElementById('buttonAttack')
let blockButton = document.getElementById('buttonBlock')
let chargeButton = document.getElementById('buttonCharge')
let addAttackButton = document.getElementById('moreAttackButton')
let healSelfButton = document.getElementById('healYourselfButton')

let playerHealthTag = document.getElementById('playerHealthTag')
let playerAttackTag = document.getElementById('playerAttackTag')
let playerWeaponTag = document.getElementById('playerWeaponTag')


let enemyHealthTag = document.getElementById('enemyHealthTag')
let enemyAttackTag = document.getElementById('enemyAttackTag')
let enemyWeaponTag = document.getElementById('enemyWeaponTag')

let statusText = document.getElementById('statusText')
let popup = document.getElementById('popup')


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('playerName').textContent = player1.name
    playerHealthTag.textContent = `Health: ${player1.stats.health}`
    playerAttackTag.textContent = `Attack: ${player1.stats.attack}`
  

    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = ` Attack: ${enemies[bossTurn].stats.attack}`
})

let player1Attack = player1.stats.attack 



console.log(enemies[bossTurn].stats.attack)
console.log(player1Attack)
console.log(this.name)

function bossDefeatedReward(){
 
}

function changeBossUntilWinCondition(){
    console.log(`${player1.name} wins!!`)
    popup.style.visibility = 'visible'
    bossTurn += 1
    if(bossTurn < 6 ){
    statusText.textContent = `Get Ready for ${enemies[bossTurn].name}`
    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = `Attack: ${enemies[bossTurn].stats.attack}`
    } else if(bossTurn  == 6){
        statusText.textContent = `This is the final boss ${enemies[bossTurn].name}. As his name states he is the destroyer of all worlds. If you do not defeat him your world will parish`
    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = `Attack: ${enemies[bossTurn].stats.attack}`
    } else if(enemies[6].stats.health < 0){
        statusText.textContent = 'You have saved the world!!'
    }
}

function timedMessage(mili) {
    return new Promise(resolve => setTimeout(resolve, mili))
}

async function pressingAttack(){
    
    
    if(enemies[bossTurn].stats.health > 0){
    statusText.textContent = `You damaged the enemy for ${player1Attack} Damage` 
    enemies[bossTurn].stats.health -= player1Attack
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
  
    statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
    player1.stats.health -= enemies[bossTurn].stats.attack
    playerHealthTag.textContent = `Health: ${player1.stats.health}`

    }
    else if(enemies[bossTurn].stats.health <= 0){
            
        
        changeBossUntilWinCondition()        
 //popup show with two buttons. If one is clicked. Add more damage. if the other is clicked heal full 
    } else if(enemies[6].stats.health < 0){
        statusText.textContent = 'You have saved the world!!'
    }
}

async function pressingBlock(){
    statusText.textContent = `The enemy attempts to attack you for ${enemies[bossTurn].stats.attack} damage`
    await timedMessage(2000)
    statusText.textContent = `You have blocked the enemy's attack and taken no damage`
}

async function pressingCharge(){
    //creating a function to return a promise and when the promise resolves we will use the set timeout with the miliseconds I put in 


        if(enemies[bossTurn].stats.health > 0){
            statusText.textContent = `You wait one turn to charge your attack for double damage`
            await timedMessage(1000)
            statusText.textContent =`The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
            await timedMessage(1000)
            player1.stats.health -= enemies[bossTurn].stats.attack
            playerHealthTag.textContent = `Health: ${player1.stats.health}`
            await timedMessage(2000)
            statusText.textContent = `You did double Damage!`
            await timedMessage(1000)
            enemies[bossTurn].stats.health -= player1Attack * 2
            enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
            await timedMessage(1000)
            statusText.textContent ='Choose your next move'
        }
            else if(enemies[bossTurn].stats.health <= 0){
                changeBossUntilWinCondition()
            } 
                else if(enemies[6].stats.health < 0){
                    statusText.textContent = 'You have saved the world!!'
                }

}
    addAttackButton.addEventListener('click', function(){
        console.log('hello')
        player1.stats.attack =  player1.stats.attack * 2 
        playerAttackTag.textContent = `Attack: ${player1.stats.attack}`
         popup.style.visibility = 'hidden'
    })
    console.log('hello')
     healSelfButton.addEventListener('click', function(){
         player1.stats.health = 100
         playerHealthTag.textContent = `Health: ${player1.stats.health}`
         popup.style.visibility = 'hidden'
     })

buttonAttack.addEventListener('click', pressingAttack)
buttonBlock.addEventListener('click', pressingBlock)
chargeButton.addEventListener('click', pressingCharge)




