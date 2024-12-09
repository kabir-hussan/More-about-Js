
      function loadData(){
        const url= 'https://jsonplaceholder.typicode.com/todos/1';
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
      }

      function loadUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
      }

      function displayUsers(data){
        const ul= document.getElementById('users-list');
        console.log(data);
        
        for(const user of data){
            console.log(user.name);
            const li= document.createElement('li');
            li.innerText= user.name;
            ul.appendChild(li);

        }
    
        
      }