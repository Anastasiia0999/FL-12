function makeNumber(a='str'){
    
    var num = a.replace(/\D+/g,'');
    if(num.length===0){
        return "''";
    } else{
        
        return parseInt(num);
    }
}

makeNumber('hh');