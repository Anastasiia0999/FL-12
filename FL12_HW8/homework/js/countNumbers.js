function countNumber(a='str'){
    
    var num = a.replace(/\D+/g,'');
    
     let map = new Map();
    
    var counter;
    
    if(num.length===0){
        return "''";
    } else{
        
        for( var i=0; i< num.length; i++){
            
            counter=0;
            
            for( var b=0; b< num.length; b++){
            
                if(num[i]===num[b]){
 counter++; 
}
                
            }
            if(counter!==0){
                
                map.set(num[i], counter);
            }
        }
              
        return map;
    }
   
}

countNumber('');