function camelize(str) {
    return str
        .split("-")
        .map((word, index) => {
            if (index != 0) {
                return word[0].toUpperCase() + word.slice(1);
            }
            return word
        })
        .reduce((previous, current) => previous + current, "");

}

console.log(camelize("background-color"))


let arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr, min, max) {
    arr.forEach((item, index) => item <= max && item >= min ? item : arr.splice(index, 1))
}

filterRangeInPlace(arr1, 1, 4)
console.log('Filter in place:', arr1)


let arr2 = [5, 3, 8, 1]

function filterRange(arr, min, max) {
    return arr.filter(item => item <= max && item >= min)
}

console.log('Filter:', filterRange(arr2, 1, 4), arr2)

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

function copySorted(arr){
    return arr.slice().sort()
}
console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr3 ); // HTML, JavaScript, CSS (no changes)

