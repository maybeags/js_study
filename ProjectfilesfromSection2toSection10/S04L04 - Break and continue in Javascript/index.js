
const values_of_pi = [2.7, 3.138542, 3.18, 3.14, 7.88, 4.1, 6.0, 3.2]

for (let i = 0; i < values_of_pi.length; i++){

    if((values_of_pi[i] < 3) || (values_of_pi[i] > 4)){
        continue
    }


    if (values_of_pi[i] == 3.14){
        console.log("We found the value of pi", values_of_pi[i]);
        break;
    }
    console.log(values_of_pi[i]);
}
