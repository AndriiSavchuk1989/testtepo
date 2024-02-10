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

let arr = [];
let items = 0;

while(items < 5) {
    let func = items => {
        let indexToShow = items;
        return () => indexToShow;
    }

    arr.push(func(items));
    items++;
};

console.log(arr[0]())
console.log(arr[1]())
console.log(arr[2]())
console.log(arr[3]())
console.log(arr[4]())

for (let i=0; i < 5; i++) {
    setTimeout(() => {
        console.log("i from timeout", i)
    }, i*1000);
}
