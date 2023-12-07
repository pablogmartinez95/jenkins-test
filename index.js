const process = require('process');

let argv = process.argv.slice(2);

argv.forEach((val, index) => {
    console.log(`Parametro ${index + 1}: ${val}`);
});
