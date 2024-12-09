let time = 0;

const tellJoke= setInterval(()=>{
    time++;

    console.log('Hello');
    if(time>9){
        clearInterval(tellJoke);
    }
    
}, 2000);