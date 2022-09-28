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

const player1 = {

        name:'Erik',
        stats:{
            health: 100,
            attack: 15
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
                src:'./assets/funedad.png'
        }
,
        {
            name: 'Xeindryt The Scary',
                stats: {
                    health: 60,
                    attack: 4,
                },
                src:'./assets/xey.png'
        }
        ,
        {
            name: 'Cyrril Lord Of The Red',
                stats: {
                    health: 70,
                    attack: 6,
                },
                src: './assets/cyrill.png'
        }
        ,
        {
            name: 'Galzrei The Gifted One',
                stats: {
                    health: 80,
                    attack: 9,
                },
                src: './assets/gal.jpg'
        }
        ,
        {
            name: 'Barurrat Eater Of All',
                stats: {
                    health: 90,
                    attack: 13,
                },
                src: './assets/barr.png'
        }
        ,
        {
            name: 'Chevro Destroyer Of Worlds',
                stats: {
                    health: 120,
                    attack: 18,
                },
                src: "./assets/chervo.png"
        }
    ]



let bossTurn = 0;
let bossAttack = 0;
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
        document.getElementById('playerName').textContent = document.getElementById('characterName').value
        document.getElementById('popupName').remove();
        document.getElementById('container').style.opacity = '100%'
    })

})
function playerLose(){
        player1.stats.health = 0
        playerHealthTag.textContent = `Health: ${player1.stats.health}`
        statusText.textContent = 'You lose'
    
}
async function bossChange(){
    document.getElementById('enemyName').textContent = enemies[bossTurn].name
    enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
    enemyAttackTag.textContent = `Attack: ${enemies[bossTurn].stats.attack}`
    document.getElementById('enemyImage').src = enemies[bossTurn].src
    await timedMessage(2000)
    popup.style.visibility = 'visible'
}

async function changeBossUntilWinCondition(){
    attackButton.removeEventListener('click',pressingAttack)
    bossTurn += 1

    if(bossTurn < 6 ){
        statusText.textContent = `Congrats! You Win!! Get Ready for ${enemies[bossTurn].name} with these rewards`
        bossChange()
    } 
    else if(bossTurn == 6){
        statusText.textContent = `This is the final boss ${enemies[bossTurn].name}. As his name states he is the destroyer of all worlds. If you do not defeat him your world will parish`
        bossChange()
    } 
    else if(player1.stats.attack >= enemies[6].stats.health){
        statusText.textContent = 'You have saved the world!!'
    }
}

function timedMessage(mili) {
    return new Promise(resolve => setTimeout(resolve, mili))
}

async function pressingAttack(){

    
    if(enemies[bossTurn].stats.health - player1.stats.attack  > 0 && player1.stats.health - enemies[bossTurn].stats.attack > 0 ){
        await timedMessage(1000)
        statusText.textContent = `You damaged the enemy for ${player1.stats.attack} Damage` 
        enemies[bossTurn].stats.health -= player1.stats.attack
        enemyHealthTag.textContent  = `Health: ${enemies[bossTurn].stats.health}`
        await timedMessage(1000)

            if(bossAttack<5){
                bossAttack++
                console.log(bossAttack)
                statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
                player1.stats.health -= enemies[bossTurn].stats.attack
                playerHealthTag.textContent = `Health: ${player1.stats.health}`
            } 
                else if(bossAttack = 5){
                    console.log(bossAttack)
                    bossAttack = 0;
                    statusText.textContent = `The enemy attacked you for ${enemies[bossTurn].stats.attack * 5} damage`
                    player1.stats.health -= (enemies[bossTurn].stats.attack * 5)
                    playerHealthTag.textContent = `Health: ${player1.stats.health}`
                }

}
                        
                    else if( enemies[bossTurn].stats.health - player1.stats.attack <= 0){
                        await timedMessage(1000)
                        statusText.textContent = `You damaged the enemy for ${player1.stats.attack} Damage` 
                        enemies[bossTurn].stats.health -= player1.stats.attack
                        enemyHealthTag.textContent  = `Health: ${enemies[bossTurn].stats.health}`
                        await timedMessage(1000)
                        enemies[bossTurn].stats.health = 0
                        enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
                        changeBossUntilWinCondition()        
                    }

                        else if(player1.stats.health - enemies[bossTurn].stats.attack <= 0 || player1.stats.health <= 0){
                            playerLose()
                        }

                            else if(enemies[6].stats.health < 0){
                                    
                                    statusText.textContent = 'You have saved the world!!'
                                }
    
}

async function pressingBlock(){
    if(bossAttack < 5){
    statusText.textContent = `The enemy attempts to attack you for ${enemies[bossTurn].stats.attack} damage`
    await timedMessage(2000)
    statusText.textContent = `You have blocked the enemy's attack and taken no damage`
    bossAttack++
    }
    else if(bossAttack == 5){
        statusText.textContent = `The enemy attempts to attack you for ${enemies[bossTurn].stats.attack * 5} damage`
    await timedMessage(2000)
    statusText.textContent = `You have blocked the enemy's attack and taken no damage`
    }
}

async function pressingCharge(){
    //creating a function to return a promise and when the promise resolves we will use the set timeout with the miliseconds I put in 
        
    

    if(enemies[bossTurn].stats.health - player1.stats.attack  > 0 && player1.stats.health - enemies[bossTurn].stats.attack >= 0){
        statusText.textContent = `You wait one turn to charge your attack for double damage`
        await timedMessage(1000)
        if(bossAttack <5){
        statusText.textContent =`The enemy attacked you for ${enemies[bossTurn].stats.attack} damage`
        await timedMessage(1000)
        player1.stats.health -= enemies[bossTurn].stats.attack
        playerHealthTag.textContent = `Health: ${player1.stats.health}`
                } else if(bossAttack = 5){
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
        else if(enemies[bossTurn].stats.health - (player1.stats.attack * 2) <= 0){
            enemies[bossTurn].stats.health = 0
            enemyHealthTag.textContent = `Health: ${enemies[bossTurn].stats.health}`
            changeBossUntilWinCondition()        
        }
    else if(player1.stats.health - enemies[bossTurn].stats.attack <= 0 || player1.stats.health <= 0){
        playerLose()
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




