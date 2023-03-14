const http = require('http')

const server = http.createServer((req , res) => {
    //console.log(req); //return a massive object when reloaded giving info about the page

    if(req.url == '/') { // rquesting for home page
        return res.end('welcome to our home page')
    }

    // res.write('welcome to our home page')
    // res.end()

    if(req.url == '/about') { //requesting for about page
       return res.end( 'here is a short history')
    }

    //if there is no such page the show this
    return res.end(` 
    <h1>Oops!</h1> 
    <p>we cont find seen to find the page u are looking for.</p>
    <a href="/"> back home</a>
    `)

})

server.listen(5000) //setup a port on which the server listens