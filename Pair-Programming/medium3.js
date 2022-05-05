
    function math(x, y){
        let total = x / y;
        let result;
        if (x % y === 0){
                result = total;
        }else{
                result = "Error: Remainder found";
        }
        return result;
 }
 console.log(math(20, 5));
 