const reverseString = function(string) {
    let backwards = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        backwards += string[i];
    }

    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
