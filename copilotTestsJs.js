// calculate average of 2 numbers
const average = function(a, b) {
    return (a + b) / 2;
}

// readfile and parse to JSON
const readFile = function(fileName) {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}

//readfile async show on console
const readFileAsync = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// take list of names and sort alphabetic
const sortNames = function(names) {
    return names.sort();
}

//show Fibonacci sequence on console
const showFibonacci = (amount) => 
{
    // take input from the user
    const number = parseInt(amount);
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) 
    {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

// fibonacci sequence
const printFibonacci = (number) => 
{
    let n = 0;
    let n1 = 1;
    let n2;
    console.log(n);
    console.log(n1);
    while (n2 < number)
    {
        n2 = n+n1;
        n=n1;
        n1 = n2;
        console.log(n2);
    }
}

//generate fibonacci sequence
const generateFibonacci = (number) =>
{
    let n = 0;
    let n1 = 1;
    let n2;
    let fibonacci = [];

    while (n2 < number)
    {
        n2 = n+n1;
        n=n1;
        n1 = n2;
        fibonacci.push(n2);
    }
    return fibonacci;
}