 //1:

const myFunc = function(num){
let yeniarray=[]

while(num!=1){
    if(num%2==0){
        num=num/2;
        yeniarray.push(num);
    }else{
        num=(num*3)+1;
        yeniarray.push(num);
    }

}
console.log(yeniarray);
}
myFunc(6);



//2:

let newarray = [1,2,3,4,5,6,7,8,20]

  const array =function(array12){

let max;
let min;
 max=newarray[0];
 min=newarray[0];
for(let i=1; i<=array12.length-1;i++){
 
    if(array12[i]>max){
        max=array12[i];
    }
    else if(array12[i]<min){
        min=array12[i]
    }
}
    let x = max-min;
    console.log(x);

 }
 array(newarray);



//3:

let massiv=[1,2,3,4,5,6,7,8,9]
let number1=9;

const fun = function(myarray,mynumber){
    for(let i=0; i<myarray.length; i++){
        if(mynumber===myarray[i]){
            
            return true;
        }
        
    }
   
   return false;
}

console.log(fun(massiv,number1));
