let arr = [1,2,16,19,27];

const output = arr.reduce((prev,curr) => {
    return prev < curr ? prev : curr;

});
console.log (output);