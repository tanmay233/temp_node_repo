// const {readFileSync} = require('fs');

//it is same as the

// const fs = require('fs')
// fs.readFileSync

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the result : ${first} , ${second}` , {flag: 'a'})

// /The flag used will not overwrite the content but will update the file contents