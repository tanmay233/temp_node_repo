const path = require('path')

console.log(path.sep); //displays the path seperator for the type of os 

const filePath = path.join('\content', 'subfolder' , 'test.txt') //joining path to access the file or store
console.log(filePath);

const base = path.basename(filePath) //access the base path of the given path or the file name to be in layman language
console.log(base);

const absolute = path.resolve(__dirname, 'content' , 'subfolder' , 'test.txt') //it willl gibe the absolute or the real path of the file
console.log(absolute);