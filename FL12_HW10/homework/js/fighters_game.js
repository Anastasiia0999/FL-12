function MyFighter(obj){
    
    let name=obj.name;
    let damage = obj.damage;
    let hp = obj.hp;
    let strength = obj.strength;
    let agility = obj.agility;
    
    let wins = 0;
    let losses = 0;
    
    this.getName=function(){
        return name;
    }
    this.getDamage=function(){
        return damage;
    }
    this.getHealth=function(){
        return hp;
    }
    this.getStrength=function(){
        return strength;
    }
    this.getAgility=function(){
        return agility;
    }
    
    
    this.logCombatHistory=function(){
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }
    
    this.addWin=function(){
        wins++;
    }
    
    this.addLoss=function(){
        losses++;
    }
    
    this.dealDamage=function(dam){
        
        hp=hp-dam;
        if(hp<0){
            hp=0;
        }
    }
    
    this.heal=function(addHealth){
        hp+=addHealth;
        if(hp>100){
            hp=100;
        }
    }
    
    this.attack=function(d){
        
        if(d.getStrength()+d.getAgility() < Math.random()*100){
            
            console.log(` ${this.getName()} makes ${this.getDamage()} damage to ${d.getName()}`);
            d.dealDamage(this.getDamage());
            if(d.getHealth()===0){
                console.log(`${this.getName()} has won!`)
                this.addWin();
                d.addLoss();
            }
        } else{
            console.log(`${this.getName()} attack missed`);
        }
        
    }
    
} 

function battle(fighter1, fighter2){
    
    while(fighter1.getHealth()!==0 && fighter2.getHealth()!==0){
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }
    if(fighter1.getHealth()===0 ){
        console.log(`${fighter1.getName()} is dead and can't fight`);
    }
    if(fighter2.getHealth()===0){
        console.log(`${fighter2.getName()} is dead and can't fight`);
    }
    
}

let obj1={name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25};
let obj2={name: 'Commodus', damage: 15, hp: 100, strength: 20, agility: 15};
let FighterOne = new MyFighter(obj1);
let FighterTwo = new MyFighter(obj2);

battle(FighterOne, FighterTwo);



