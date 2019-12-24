var a, b, c;
var flag;

   var discr;
    var x1, x2;

do {
    flag = false;
 a = prompt('Input a', '');
           if(isNaN(a) || !a || !isFinite(a) || Number(a)=== 0){
     
                   flag=true;
                   console.log('invalid input data');
               }
       } while(flag);
       Math.round(a);
do {
    flag = false;
        b = prompt('Input b', '');
           if(isNaN(b) || !b || !isFinite(b) || Number(b)=== 0){
                   flag=true;
                   console.log('invalid input data');
               }
       } while(flag);
       Math.round(b);
do {
    flag = false;
        c = prompt('Input c', '');
           if(isNaN(c) || !c || !isFinite(c) || Number(c)=== 0){
                   flag=true;
                   console.log('invalid input data');
               }
       } while(flag);
       Math.round(c);

    
       discr=Math.pow(b,2)-4*a*c;
       console.log('discriminant is:',discr);
       if(discr<0){
           console.log('no solution (Discriminant < 0)');
       } else if(discr>0){
        
        x1=(-b + Math.sqrt(discr))/2*a;
        console.log('x1 =',x1.toFixed(2));
        
        x2=(-b - Math.sqrt(discr))/2*a;
        console.log('x2 =',x2.toFixed(2));
    }else{
           console.log('x = ',-b/2*a);
       }
