const removeFromArray = function(arr, ...theArgs) {

    let args = [...arguments];
    argsLength = args.length;
    arrLength = arr.length;
    for (let i = 0; i < arrLength; ++i){
        for (let j = 1; j < argsLength; ++j)
        {
            if (arr[i] === args[j]){
                arr.splice(i, 1);
                i--;
            }

        }
            
        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
 