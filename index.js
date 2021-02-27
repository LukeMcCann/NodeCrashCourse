const path = require('path');

// Get Base Filename
console.log('File: ' + path.basename(__filename));

// Directory name
console.log('Directory: ' + path.dirname(__filename));

// File extension
console.log('Extension: ' + path.extname(__filename));

// Create path object
const File = path.parse(__filename);
console.log(File);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'test.js'));