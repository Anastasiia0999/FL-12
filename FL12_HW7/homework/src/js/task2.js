var answer;

var flag, playAgain;

var randNumber;

var randMax = 9;

var userNumber;

var attempt;

var totalPrize=0;

var prize1=100, prize2=50, prize3=25;

answer = confirm('Do you want to play a game?');

do{
    
attempt=3;

if(answer){
    
    randNumber = Math.floor(Math.random() * randMax);
    
    do{
           switch(attempt){
            
                case 3:

                        userNumber = prompt('Choose a roulette pocket number from 0 to '
                                            +(randMax-1)+'\nAttempts left:'+attempt+'\nTotal prize:'+totalPrize+
                                            '$\nPossible prize on current attempts:'+prize1+'$');
                        if(userNumber===String(randNumber)){
                            
                             totalPrize+=prize1;
                            flag=false;
                            
                        } else{
                            
                            attempt--;
                            flag=true;
                        }
                       if(userNumber===null || userNumber.length===0){
                        attempt=0; 
                        }
                   break;
                case 2:

                        userNumber = prompt('Choose a roulette pocket number from 0 to '
                                            +(randMax-1)+'\nAttempts left:'+attempt+'\nTotal prize:'+totalPrize+
                                            '$\nPossible prize on current attempts:'+prize2+'$');
                        if(userNumber===String(randNumber)){
                            
                                totalPrize+=prize2;
                                flag=false;
                            
                            } else{
                    
                                attempt--; 
                                flag=true;
                            }
                        if(userNumber===null || userNumber.length===0){
                         attempt=0; 
                        }

                   break;
                case 1:

                         userNumber = prompt('Choose a roulette pocket number from 0 to '
                                             +(randMax-1)+'\nAttempts left:'+attempt+'\nTotal prize:'+totalPrize+
                                             '$\nPossible prize on current attempts:'+prize3+'$');
                        if(userNumber===String(randNumber)){
                            
                                totalPrize+=prize3;
                                flag=false;
                            } else{
        
                                attempt--;
                                flag=true;
                            }
                        if(userNumber===null || userNumber.length===0){
                         attempt=0; 
                        }
                   break;
                default:{

                        alert('Thank you for your participation. Your prize is:0$');
                        flag=false;

                }
                  
            }
    }while(flag);
 
    if(totalPrize>0 && attempt>0){
        
        alert('Congratulation, you won! Your prize is:'+totalPrize+'$');
        
        answer = confirm('Do you want to continue?');
        
            if(answer){

                playAgain=true;
                
                randMax+=4;
        
                prize1*=2;
                prize2*=2;
                prize3*=2;

            }else{
                
                alert('Thank you for your participation. Your prize is:'+totalPrize+'$');
                playAgain=false;
            }
    } else{
        
            answer = confirm('Do you want to play again?');
            totalPrize=0;
        
            if(answer){

                playAgain=true;
                
                randMax=9;
        
                prize1=100;
                prize2=50;
                prize3=25;

            }else{

                playAgain=false;
            }
    }
    
}else{
    
    alert('You did not become a billionaire, but can.');
    
}
}while(playAgain);