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


let arr1 = [5, 5, 5, 5, 5, 5, 5, 3, 8, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1,];

function filterRangeInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max || arr[i] < min) {
            arr.splice(i--, 1)
        }
    }
}

filterRangeInPlace(arr1, 1, 4)
console.log('Filter in place:', arr1)


let arr2 = [5, 5, 5, 5, 5, 5, 5, 3, 8, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1,];

function filterRange(arr, min, max) {
    return arr.filter(item => item <= max && item >= min)
}

console.log('Filter:', filterRange(arr2, 1, 4), arr2)

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

function copySorted(arr) {
    return arr.slice().sort()
}

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (no changes)

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = (str) => {
        let arr = str.split(" ");
        return this.methods[arr[1]](+arr[0], +arr[2])
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 2");
console.log(result)


let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let names = users.map(user => user.name)

console.log(names)

let usersMapped = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
})

console.log(usersMapped)

let john1 = {name: "John", age: 25};
let pete1 = {name: "Pete", age: 30};
let mary1 = {name: "Mary", age: 28};

const sortByAge = (arr) => arr.sort((a, b) => a.age > b.age ? 1 : -1)
let arr4 = [pete1, john1, mary1]
console.log(sortByAge(arr4))


function unique(arr) {
    let result = [];
    arr.forEach(str => result.includes(str) ? null : result.push(str))
    return result
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings))

let usersz = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
    return users.reduce(
        (accumulator, currentUser) => {
            accumulator[currentUser.id] = currentUser;
            return accumulator
        }, {})
}

let usersById = groupById(usersz);

console.log(usersById)