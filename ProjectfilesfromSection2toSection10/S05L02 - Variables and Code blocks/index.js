let year = 2000

if(true){
    year = 2001;
    let month = 01
    console.log('Inside 1st condition: ', year, month)

    if(true){
        let year = 2023
        console.log('Inside 2st condition: ', year)
    }
}
console.log('Global console log', year);



