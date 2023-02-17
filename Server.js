const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
     res.write('<h1> hello node <h1/>')
     res.end()
    }})
