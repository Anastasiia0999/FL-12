function MyFighter(n, d, h, s, a){
    
    let name=n;
    let damage = d;
    let hp = h;
    let strength = s;
    let agility = a;
    
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
        
        if(100-(d.getStrength()+d.getAgility())>50){
            
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

let FighterOne = new MyFighter('Maximus', 25, 100, 20, 15);
let FighterTwo = new MyFighter('Commodus', 35, 100, 10, 21);

battle(FighterOne, FighterTwo);



