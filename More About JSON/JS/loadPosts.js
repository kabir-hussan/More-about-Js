function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))  
}

function displayPosts(posts){
   const postsContainer= document.getElementById('posts-container');
    for(const post of posts){
        console.log(post);
        const postDiv= document.createElement('div')
        postDiv.classList.add('post');
        postDiv.innerHTML=`
        <h3>UserId: ${post.userId}</h3>
        <h4>Title: ${post.title}</h4>
        <p>Description: ${post.body}</p>
        `
        postsContainer.appendChild(postDiv);
        
    }
    
}

loadPosts();