const arrayOriginal = [1, '2', '3', 4];

const convertArray = function (array) {
    
    let count=array.length;
    
    do{
        
        count--; 
        
        if(typeof array[count] === 'string'){
        
        array[count] = Number(array[count]);
        
        }else{
        
        array[count] = String(array[count]);
            
        }
        
        
    }while(count);

    return array;
};


convertArray(arrayOriginal);




const arrayOne = [1, 2, 3];

const executeforEach = function (a, callback) {
    
    for(let i=0; i<a.length; i++) {
            callback(a[i]);
        }

   
};

executeforEach(arrayOne, function(elem){
    
    console.log(elem*2);
    
});




const original = [2, '5', 8];


 function mapArray (arr, callback) {
    
    for(let index=0; index<arr.length; index++){
        
            arr[index]=callback(arr[index]);

    }   
  
}

mapArray(original, function(e){
    
    if(typeof e === 'string'){
        
        e = Number(e);
        
    }
    
    e+=3;
    
    return e;
    
});





const arrayO = [2, 5, 8];

var arrNew = [];

function filterArray (array1, callback) {
    
    for(let x = 0; x < array1.length; x++){
        
        
            if(callback(array1[x])){
                               
                  arrNew.push(array1[x]); 
                               
            }
    }   
  
}

filterArray(arrayO, function(e){

    return e % 2 === 0;
    
});





const sFirst = 'hello world';

var stringSecond = '';

var flipOver = function(s) {
    
let l = s.length;
    
    do{
        
        l--;
        
        stringSecond += ''+s[l]+'';
        
        
    }while(l);
    
    
    return stringSecond;
};

flipOver(sFirst);


const aOriginal=[2,7];

var aChanged = [];

function makeListFromRange(rec){
    
    let start = Number(rec[0]);
    
    let end = Number(rec[1]);
    
    
    for( let f=0; f<=end-start; f++){
        
        aChanged.push(start+f);
        
    }
    
    return aChanged;
}

makeListFromRange(aOriginal);





const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
 
var names = [];

function getArrayOfKeys (objArray,callback) {
    
    for(let i=0; i<objArray.length; i++){
        
            callback(objArray[i].name);
        }

   
}

function add(person){
    
    names.push(person);
    
}

getArrayOfKeys(actors,add); 



const task8 = [28, 40, 32, 15, 47];

var newOne = [];


 function substitute(first, callback) {
    
    for(let i=0; i<first.length; i++){
        
            newOne[i]=callback(first[i]);
    }   
  
}

function lower(r){
    
    if(r<30){
        
        r = '*';
        
    }
    
    return r;
    
}

substitute(task8,lower);




var date = new Date(2019, 0, 2);


const month = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function getPastday(d, number){
    
    number -=1;
    
    d.setDate(d.getDate()-number);
    
    const result = d.getUTCDate();
    
     return result;
    
}
getPastday(date,1);




var date1=new Date('6/15/2018 09:15:00');

function formatDate(data){
    
    return `"${data.getFullYear()}/${data.getMonth()+1}/${data.getUTCDate()} ${data.getHours()}:${data.getMinutes()}"`;
} 

formatDate(date1);

