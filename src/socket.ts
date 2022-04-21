import {WebSocket, WebSocketServer} from "ws";

export enum SocketType {
    CONNECTION = 'connection',
    MESSAGE = 'message'
};

export interface ChatData {
    username: string;
    message: string;
    date: string;
}

export default function socket({ wss } : { wss: WebSocketServer}) {
    console.log('Socket works');

    wss.on(SocketType.CONNECTION, (ws: WebSocket) => {
        console.log('it`s nice!')
        ws.on(SocketType.MESSAGE, (mesage: string) => {
            console.log('message is: ', message);
        });
    });
}

