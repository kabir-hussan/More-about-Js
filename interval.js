// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
    
// },2000)
// console.log(4);
// console.log(5);
// console.log(6);

// console.log('show the output for setInterval');


// code for setInterval function
let num=0;
const clockId= setInterval( ()=>{
    num++;
    // num= num +1;
    // num += 1;
    
    console.log(clockId, num); 
    if(num>5){
        clearInterval(clockId);
    }  

}, 2000)
