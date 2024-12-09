function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
    
}

function displayPhotos(photos){
    const photosContainer= document.getElementById('photos-container');
    console.log(photos);
    for(const photo of photos){
        console.log(photo);
        const photoDiv= document.createElement('div')
        photoDiv.innerHTML=`
        <img src= '${photo.url}'>
        `
        photosContainer.appendChild(photoDiv);
    }
    
}
loadPhotos();