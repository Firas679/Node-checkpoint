const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='http://localhost:3000'){
     res.write('<h1> hello node <h1/>')
     res.end()
    }})
