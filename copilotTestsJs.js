// calculate average of 2 numbers
var average = function(a, b) {
    return (a + b) / 2;
}

// readfile and parse to JSON
var readFile = function(fileName) {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}

//readfile async show on console
var readFileAsync = function(fileName) {
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