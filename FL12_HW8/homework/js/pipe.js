function addOne(){
      return arguments[0]+1;
  }

function pipe() {
    
    var x=arguments[0];
    
  if (arguments.length === 1) {
      
    return x;
      
  } else {
      
      for( var i=arguments.length; i>1;i--){
          
          
           x=addOne(x);
      }
      
         return x;
  }
    
 
}

pipe(2,addOne, addOne);