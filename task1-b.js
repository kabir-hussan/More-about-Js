function delayGreeting(name, time){
    setTimeout(()=>{
        console.log('Hello, ', name);
        
    }, time)

}

delayGreeting('Nahidul!', 2000);