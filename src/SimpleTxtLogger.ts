import fs from 'fs';

export class SimpleTxtLogger {

    static newDateTime(): string {
        const date = new Date().toUTCString();
        return date.substring(0, date.indexOf(':')-3).replace(',','').replace(/[ \s]/g, '_');
    }

    private txtLogger: fs.WriteStream;

    public constructor(fileName = new Date().getTime().toString(), tag = 'LOGS', appName = '<AppName>') {
        if (!fs.existsSync('logs')) fs.mkdirSync('logs');

        this.txtLogger = fs.createWriteStream(`logs/[${tag}]${fileName}.txt`)
        .on('error', (err:Error) => {
            throw err;
        });

        this.txtLogger.write(`Logs for: '${appName}' [${tag}]\n`);
        this.writeToLogFile('Initialised Logging: SimpleTxtLogger Setup.');
    }

    public writeToLogFile(log: string | Error): void {
        this.txtLogger.write(`\n[${new Date().toLocaleString()}] ${log}`);
    }

    public appendToLogFile(log: string | Error): void {
        fs.appendFile(this.txtLogger.path, `\n[${new Date().toLocaleString()}] ${log}`, (err: NodeJS.ErrnoException | null) => {
            if (err) this.writeToLogFile(err);
        });
    }

    public dumpToNewTxtFile(itemToLog: string, fileName: string, directory = 'logs'): void {
        if (!fs.existsSync(directory)) fs.mkdirSync(directory);

        const dataDump:fs.WriteStream = fs.createWriteStream(`${directory}/${fileName}.txt`).on('error', (err:Error) => {
            throw err;
        }).on('ready', () => {
            dataDump.write(itemToLog);
            dataDump.destroy();
        });
    }

    public getPath(): fs.PathLike {
        return this.txtLogger.path;
    }

    public close(): void {
        this.txtLogger.destroy();
    }
}