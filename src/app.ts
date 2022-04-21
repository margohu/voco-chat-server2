import express from 'express';
import {Application} from "express/ts4.0";
import {createServer} from 'http';

const app: Application = express();
const PORT: number = 8080 || parseInt(process.env.PORT as string, 10);
const httpServer = createServer(app);

httpServer.listen((PORT),() => {
    console.log(`Listening on port: ${PORT}`);
});