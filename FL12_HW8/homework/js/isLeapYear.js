function isLeapYear(str){
    
    var date= new Date(str);
    if(date.getFullYear()%4===0){
        
        if(date.getFullYear()%100!==0 && date.getFullYear%400===0){
            
            return '"'+date.getFullYear()+'" is a leap year';
            
        } else{
            
             return '"'+date.getFullYear()+'" is not a leap year';
        }
        
        
    }else if(isNaN(date.getFullYear)){
             
        return 'Invalid Data';
             
    } else {
 return '"'+date.getFullYear()+'" is not a leap year'; 
}
}

isLeapYear('2200-01-15 13:00:00');