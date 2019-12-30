function getMin() {
    var minIndex=0;
  for (var i = 1; i < arguments.length; i++) {
    if(arguments[i] < arguments[i-1]){
        minIndex=i;
    }
  }
    
    return arguments[minIndex];
}

getMin(3,1,2,5);