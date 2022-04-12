const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || typeof num1 === "string" || typeof num2 === "string" || typeof num1 === "object" || typeof num2 === "object"){
        return 'ERROR';
    }

    
   
    let largeNum = num1 > num2 ? num1 : num2;
    let smalNum = num1 === largeNum ? num2 : num1;
    let sum = smalNum;

    for (let i = smalNum + 1; i <= largeNum; ++i){
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
 