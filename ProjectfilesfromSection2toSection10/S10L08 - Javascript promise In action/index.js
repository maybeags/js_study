const demo = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello promise!!");
        //reject("Hello Reject!!")
    });

}

// demo().then((data) => {
//     console.log(data); // Hello promise!!!
// }, (err) => {
//     console.log(err)
// });


demo().then((data) => {
    console.log("output 2: "+ data); // Hello promise!!!
}).catch(err => {
    console.error('Error:', err);
});
