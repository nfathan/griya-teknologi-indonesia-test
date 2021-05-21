const generate = (max) => {
    if(max < 2) {
        return ; // function berhenti
    } 

    if(max>=2 && max<=7 && max!=4 && max!=6) {
        console.log(max)
    }
    if(max%2 != 0 && max%3 != 0 && max%5 != 0 && max%7 != 0 ) {
        console.log(max)
    }
    max-- // loop sampai max == 2
    return generate(max)
}

console.log(generate(20));

