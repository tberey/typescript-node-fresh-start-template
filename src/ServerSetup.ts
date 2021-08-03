import { SimpleTxtLogger } from 'simple-txt-logger';
import { Rollbar } from './Rollbar';
import express, { Express, Router } from 'express';
import dotenv from 'dotenv';
import http from 'http';

export class ServerSetup {

    static appName = 'APP NAME';

    private port: string;
    private hostname: string;
    private server: http.Server;
    private app: Express;
    protected router: Router;
    protected txtLogger: SimpleTxtLogger;
    protected rollbarLogger: Rollbar;

    protected constructor(port = '3000', hostname = '127.0.0.1') {
        dotenv.config();
        this.port = process.env['PORT'] || port;
        this.hostname = process.env['HOSTNAME'] || hostname;

        this.txtLogger = new SimpleTxtLogger(SimpleTxtLogger.newDateTime(), 'Server', ServerSetup.appName);
        this.rollbarLogger = new Rollbar(this.txtLogger, ServerSetup.appName);
        this.txtLogger.writeToLogFile('...::SERVER-SIDE APPLICATION STARTING::...');

        this.router = express.Router();
        this.app = express();
        this.server = new http.Server(this.app);

        this.serverConfig();
        this.serverStart();
    }

    private serverConfig(): void {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(express.static('../public'));
        this.app.set('view engine', 'ejs');
        this.app.use("/", this.router);
        this.txtLogger.writeToLogFile('Configured Server.');
    }

    private serverStart(): void {
        this.server.listen(parseInt(this.port), this.hostname, () => this.txtLogger.writeToLogFile(`Started HTTP Server: http://${this.hostname}:${this.port}`));
    }

    // Accessor needed for testing only. So property 'this.app' can remain private.
    public appAccessor(app = this.app): Express {
        return app;
    }
}