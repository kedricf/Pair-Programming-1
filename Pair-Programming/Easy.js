let getEvenNumbers = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    
    for (num of arr){	
        if (num % 2 === 0) {      
            console.log("even");
        }
    }
}

getEvenNumbers();

// To get odd numbers.
if (num % 2 === 1){
    console.log("Odd")
}

