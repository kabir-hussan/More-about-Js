console.log('new promise is created');

const myLoader= ()=>{
    return new Promise((resolve, reject) => {
        const success= Math.random();
        if(success <= 0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    })
}

myLoader()

.then(data => console.log('resolved value is: ', data)) //then work for resolve data
.catch(error => console.log('rejected value is: ', error)) //catch work for rejected data
