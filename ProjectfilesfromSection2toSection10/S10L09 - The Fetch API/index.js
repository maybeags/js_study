let info = fetch('https://jsonplaceholder.typicode.com/todos/1')

info.then((response) => {response.json().then((data)=> {console.log(data)})})
.catch((err) => {console.log("Error", err)})


console.log("Hello world")