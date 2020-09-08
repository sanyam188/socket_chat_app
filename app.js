var exp=require('express')
var http=require('http')
var app=exp()
http.createServer(function(req,res){
    res.write('Hello from http server')
    res.end()
}).listen(8000)

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello, Sanyam</h1>')
// })

// http.listen(8000,()=>{
//     console.log('http listening on 8000')
// })

// app.listen(3000,()=>{
//     console.log("Listening to you on 3000")
// })