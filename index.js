// Add your code here

let users = {
    name: 'Steve',
    email: 'steve@steve.com'
}

let configObj = {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({users})
    }

function submitData(name, email){
return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object[id];
  })
  .catch(function(error){
      alert("Bad things! Ragnarok!");
      document.body.innerHTML = error.message;
    })
};