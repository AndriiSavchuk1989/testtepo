let sum = val => {
    let result = val;

    let additionalSum = additionalVal => {
        result = result + additionalVal;
        return additionalSum;
    };

    additionalSum.toString = () => {
        return result;
    };

    return additionalSum;
};

console.log(sum(1)(2)(3)(4)(5)(6)(7).toString())