const reverseString = function(str) {
    charArray = str.split("");
    let i = 0;
    let j = str.length - 1;
    strLength = str.length - 1;
    for ( let k = 0; k <= strLength/2; ++k){
        let temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        i++;
        j--;
    }

    return charArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
 