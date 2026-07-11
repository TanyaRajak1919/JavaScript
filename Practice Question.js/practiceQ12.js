let num = 7;// number to check
let prime = true;// assume num is prime

for(let i =2;i<num;i++){// check from 2 to num 1

    if(num%i ==0){// if num is completly divided 
    prime=false;
}
}
if(prime){
    console.log("prime");//if not divided
}else{
    console.log("not prime");

}