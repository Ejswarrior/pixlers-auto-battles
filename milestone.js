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


//Things left to do
// 1: popup to enter name and add value to the character - Done
// 2: boss does 5 times damage after every 5 attack - Done
// 3: popup for 
// 4: Unique pictures for each character - Done just need images

let bossTurn = 0;
let bossAttack = 0;


const player1 = {

        name:'Erik',
        stats:{
            health: 100,
            attack: 3
            },
        
}

const enemies = [
    
{
            name:'Borgor the half Demon',
                stats: {
                    health: 40,
                    attack: 50,
                },
                
        }
,
        {
            name: 'Funedad the tree spirit',
                stats: {
                    health: 50,
                    attack: 4,
                },
                src:'animegirl.jpg'
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
            name: 'Chevro Destroyer Of Worlds',
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
let namePopup = document.getElementById('popupName')

let player1Attack = player1.stats.attack 

document.addEventListener('DOMContentLoaded', function(){
    namePopup.style.visibility ='visible'
    document.getElementById('container').style.opacity = '10%'
    namePopup.style.opacity = '100%'

    
    document.getElementById('playerName').textContent = player1.name
    playerHealthTag.textContent = `Health: ${player1.stats.health}`
    playerAttackTag.textContent = `Attack: ${player1.stats.attack}`
  

    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = ` Attack: ${enemies[bossTurn].stats.attack}`
    document.getElementById('nameSubmit').addEventListener('click', function(){
        console.log('hello')
        document.getElementById('playerName').textContent = document.getElementById('characterName').value
        document.getElementById('popupName').remove();
        document.getElementById('container').style.opacity = '100%'
    })
})



function bossDefeatedReward(){
 
}

async function changeBossUntilWinCondition(){
    attackButton.removeEventListener('click',pressingAttack)
    bossTurn += 1

    if(bossTurn < 6 ){
    statusText.textContent = `Congrats! You Win!! Get Ready for ${enemies[bossTurn].name} with these rewards`
    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = `Attack: ${enemies[bossTurn].stats.attack}`
    document.getElementById('enemyImage').src = enemies[bossTurn].src
    await timedMessage(2000)
    popup.style.visibility = 'visible'
    } 
    else if(bossTurn  == 6){
        statusText.textContent = `This is the final boss ${enemies[bossTurn].name}. As his name states he is the destroyer of all worlds. If you do not defeat him your world will parish`
    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = `Attack: ${enemies[bossTurn].stats.attack}`
    await timedMessage(2000)
    popup.style.visibility = 'visible'
    } 
    else if(player1.stats.attack >= enemies[6].stats.health){
        statusText.textContent = 'You have saved the world!!'
    }
}

function timedMessage(mili) {
    return new Promise(resolve => setTimeout(resolve, mili))
}

async function pressingAttack(){

    
    if(enemies[bossTurn].stats.health - player1.stats.attack > 0 && player1.stats.health - enemies[bossTurn].stats.attack > 0 ){
    await timedMessage(1000)
    statusText.textContent = `You damaged the enemy for ${player1Attack} Damage` 
    enemies[bossTurn].stats.health -= player1.stats.attack
    enemyHealthTag.textContent  = `Health: ${enemies[bossTurn].stats.health}`
    await timedMessage(1000)
    if(bossAttack<5){
        bossAttack++
        console.log(bossAttack)
    statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
    player1.stats.health -= enemies[bossTurn].stats.attack
    playerHealthTag.textContent = `Health: ${player1.stats.health}`
    } else if(bossAttack = 5){
        console.log(bossAttack)
        bossAttack = 0;
        statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack * 5} damage`
    player1.stats.health -= (enemies[bossTurn].stats.attack * 5)
    playerHealthTag.textContent = `Health: ${player1.stats.health}`
    }
}
    

    else if(player1.stats.health - enemies[bossTurn].stats.attack <= 0 || player1.stats.health <= 0){
        
        statusText.textContent = 'You lose'
    }


    else if(enemies[bossTurn].stats.health - player1.stats.attack < 0){
            
        
        changeBossUntilWinCondition()        
 //popup show with two buttons. If one is clicked. Add more damage. if the other is clicked heal full 
    }  else if(enemies[6].stats.health < 0){
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


        if(enemies[bossTurn].stats.health - player1.stats.attack > 0 && player1.stats.health - enemies[bossTurn].stats.attack > 0){
            statusText.textContent = `You wait one turn to charge your attack for double damage`
            await timedMessage(1000)
            if(bossAttack <5){
            statusText.textContent =`The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
            await timedMessage(1000)
            player1.stats.health -= enemies[bossTurn].stats.attack
            playerHealthTag.textContent = `Health: ${player1.stats.health}`
            } else if(boss = 5){
            console.log(bossAttack)
            bossAttack = 0;
            await timedMessage(1000)
            statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack * 5} damage`
            player1.stats.health -= (enemies[bossTurn].stats.attack * 5)
            playerHealthTag.textContent = `Health: ${player1.stats.health}`
            }
            await timedMessage(2000)
            statusText.textContent = `You did double Damage!`
            await timedMessage(1000)
            enemies[bossTurn].stats.health -= player1Attack * 2
            enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
            await timedMessage(1000)
            statusText.textContent ='Choose your next move'
        }
        else if(player1.stats.health - enemies[bossTurn].stats.attack <= 0 || player1.stats.health <= 0){
        
            statusText.textContent = 'You lose'
        }
            else if(enemies[bossTurn].stats.health <= 0){
                changeBossUntilWinCondition()
            } 
                else if(enemies[6].stats.health < 0){
                    statusText.textContent = 'You have saved the world!!'
                }

}
    addAttackButton.addEventListener('click', function(){
        buttonAttack.addEventListener('click', pressingAttack)
        player1.stats.attack =  player1.stats.attack * 2 
        console.log(player1.stats.attack)
        playerAttackTag.textContent = `Attack: ${player1.stats.attack}`
        popup.style.visibility = 'hidden'
    })
    
     healSelfButton.addEventListener('click', function(){
        buttonAttack.addEventListener('click', pressingAttack)
         player1.stats.health = 100
         playerHealthTag.textContent = `Health: ${player1.stats.health}`
         popup.style.visibility = 'hidden'
     })

buttonAttack.addEventListener('click', pressingAttack)
buttonBlock.addEventListener('click', pressingBlock)
chargeButton.addEventListener('click', pressingCharge)




