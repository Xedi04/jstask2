// //1:



//2:

let newarray = [1,2,3,4,5,6,7,8,16]

  const array =function(newarray){

let max;
let min;
 max=newarray[0];
 min=newarray[0];
for(let i=1; i<=newarray.length-1;i++){
 
    if(newarray[i]>max){
        max=newarray[i];
    }
    else if(newarray[i]<min){
        min=newarray[i]
    }
}
    let f = max-min;
    console.log(f);

 }
 array(newarray);

//3:

let massiv=[1,2,3,4,5,6,7,8,9]
let number1=1;

const fun = function(massiv,number1){
    for(let i=0; i<massiv.lenght; i++){
        if(number1===massiv[i]){
            
            return true;
        }
        
    }
   
   return false;
}

console.log(fun(massiv,number1));
