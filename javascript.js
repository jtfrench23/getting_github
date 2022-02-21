const myForm = document.getElementById('get_user');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    var username = formData.get('username');
    document.getElementById('content').innerHTML = "";
    fetch("https://api.github.com/users/" + username)
    .then(response => response.json())
    .then(coderData => {
        console.log(coderData);
        var img = document.createElement('img');
        img.src = coderData.avatar_url;
        var src = document.getElementById("content");
        src.appendChild(img);
        var bio = document.createElement('p');
        bio.innerHTML = "username is " + coderData.login + "<br></br>" + "Bio: " + coderData.bio;
        src.appendChild(bio)
        document.getElementById('get_user').reset();
    }) 
    .catch(err => console.log(err) )
})