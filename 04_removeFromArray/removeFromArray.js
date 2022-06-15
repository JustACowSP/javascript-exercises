const removeFromArray = function (array, ...valuesToRemove) {
    let valuesToRemoveArray = [...valuesToRemove];
    return array.filter(function (value) { return !valuesToRemoveArray.includes(value); });
};

// Do not edit below this line
module.exports = removeFromArray;
