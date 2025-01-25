const displayData = (callback) => {

    let request = new XMLHttpRequest()

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/11114141111')
    request.send()
    request.addEventListener('readystatechange', () => {

        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
            callback("Error while calling the API", undefined);
        } 
    })

}

displayData((err, data) => {
    if(err){
        console.log(`An error occurred: ${err}`);
    }else{
        console.log(data);
    }
   
});
