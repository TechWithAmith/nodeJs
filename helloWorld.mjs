import { createServer } from 'node:http'

const server = createServer((req,res) =>{
    res.setHeader("content_type","text/plan");
    res.statusCode = 200;
    res.end("Hello World");
})

server.listen(3000,"127.0.0.1",() =>{
    console.log("Server listening....")
})