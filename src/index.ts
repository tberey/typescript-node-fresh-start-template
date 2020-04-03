/*
Hello, Node.ts Server World.
------------------------------------------------------------------------------------------
*/


// TypeScript Demo:
import http from "http";

export interface consoleMessage {
    message:string
}

const msg:consoleMessage = {message: 'hello world'};
console.log(msg.message);



// Node.js Demo:
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req:object, res:any) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});