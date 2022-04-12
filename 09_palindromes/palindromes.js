const palindromes = function (str) {
    processedstr = str.toLowerCase().replace(/[^a-z]/g,"");
    return (processedstr.split("").reverse().join("") == processedstr);
};

// Do not edit below this line
module.exports = palindromes;
 