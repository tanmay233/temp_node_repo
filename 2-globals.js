/*
GLOBALS - NO WINDOWS

__dirname - path to current working directory
__filename - file name
require - function to use modules (CommonJS )
module - info about current module (file)
process - info about env where the programe is being executed

*/

console.log(__filename);
setInterval(() => {
    console.log('hello wolrd');
}, 1000)