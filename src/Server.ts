import { ServerSetup } from './ServerSetup';
import { Request, Response } from 'express';

export class Server extends ServerSetup {

    constructor(port?: string, hostname?: string) {
        super(port, hostname);
        this.getRequests();
        this.postRequests();
    }


    private getRequests(): void {
        this.router.get('/', (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: GET /');

            const status = 200;
            res.status(status).render('index.ejs', {  data: 'World'  });

            this.txtLogger.writeToLogFile(
            `Request Completed:
            GET: ${req.url},
            Host: ${req.hostname},
            IP: ${req.ip},
            Type: ${req.protocol?.toUpperCase()},
            Status: ${status}.`
            );
        });

        this.router.get('/test', (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: GET /test');

            const status = 200;
            res.status(status).send();

            this.txtLogger.writeToLogFile(
            `Request Completed:
            GET: ${req.url},
            Host: ${req.hostname},
            IP: ${req.ip},
            Type: ${req.protocol?.toUpperCase()},
            Status: ${status}.`
            );
        });
    }

    private postRequests(): void {
        this.router.post('/test', (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: POST /test');

            const status = 200;
            res.status(status).send();

            this.txtLogger.writeToLogFile(
            `Request Completed:
            POST: ${req.url},
            Host: ${req.hostname},
            IP: ${req.ip},
            Type: ${req.protocol?.toUpperCase()},
            Status: ${status}.`
            );
        });
    }
}