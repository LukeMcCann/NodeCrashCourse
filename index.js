const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('New Folder Created...');
});

// Create and write to file
fs.writeFile(
    path.join(__dirname, '/test', 'module.js'), 
    'console.log("Hello World!");', 
    err => {
        if (err) throw err; 
        console.log('New File Created...');
    }
);