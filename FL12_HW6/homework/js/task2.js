var a, b, c;
       var flag;
       do{
           flag=false;
        a = prompt('Input a', '');
           if(isNaN(a) || !a || !isFinite(a)){
                   flag=true;
                    alert('inputed values should be ONLY numbers');
               }
           if( Number(a)<=0){
                 flag=true;
                 alert('A triangle must have 3 sides with a positive definite length');
            }
       } while(flag);
       a = Number(a,10);
        do{
           flag=false;
        b = prompt('Input b', '');
           if(isNaN(b) || !b || !isFinite(b)){
                   flag=true;
                    alert('inputed values should be ONLY numbers');
               }
            if(Number(b)<=0){
                 flag=true;
                 alert('A triangle must have 3 sides with a positive definite length');
            }
       } while(flag);
       
        b = Number(b,10);
        
        do{
           flag=false;
        c = prompt('Input c', '');
           if(isNaN(c) || !c || !isFinite(c) ){
                   flag=true;
                    alert('inputed values should be ONLY numbers');
               }
            if(Number(c)<=0){
                 flag=true;
                 alert('A triangle must have 3 sides with a positive definite length');
            }
       } while(flag);
        
        c = Number(c,10);
        if(a+b>c && a+c>b && c+b>a){
                if(a===b && b===c){
                        console.log('Equilateral triangle');
                    } else if(a===b || b===c || c===a){
                        console.log('Isoscalene triangle');
                    } else{
                    console.log('Scalene triangle');
                }
        } else{
            console.log('Triangle doesn’t exist');
        }
