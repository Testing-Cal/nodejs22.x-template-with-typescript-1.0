import { createServer, IncomingMessage, ServerResponse } from "http";
import * as fs from 'fs';
import * as path from 'path';

var port = process.env.port || 3005;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
       if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
                } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                const pageTitle = 'Node.js 20 with TypeScript without Express';
                const pageBody = "Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)";
                let html = data.toString();
                html = html.replace('<title></title>', `<title>${pageTitle}</title>`);
                html = html.replace('<p></p>', `<p>${pageBody}</p>`);
                response.end(html);
                }
                });
  }
);

server.listen(port);

console.log("Server running on Port:", port);

export default server;
