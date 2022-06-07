const http = require('http');
const port = 3001;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('We are Done!!');
})

server.listen(port, () =>{
    console.log(`Server is listening on PORT: ${port}`);
})
