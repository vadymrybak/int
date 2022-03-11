import express, { Express, NextFunction, Request, Response } from "express";
import http from "http";
import httpContext from "express-http-context";
import { v4 as uuid } from "uuid";
import { router } from "./Router/ApiRouter";

const port: string | number = process.env.PORT || 8080; // default port to listen
export const app: Express = express();
const server: http.Server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(httpContext.middleware);
app.use((req: Request, res: Response, next: NextFunction) => {
	httpContext.set("reqId", uuid());
	next();
});

app.use("/api", router);


function onError(error: { syscall: string, code: string }): void {
	if (error.syscall !== "listen") {
		throw error;
	}
	const bind: string = typeof port === "string" ? "Pipe " + port : "Port " + port;
	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.log(bind + " requires elevated privileges", () => {
				process.exit(1);
			});
			break;
		case "EADDRINUSE":
			console.log(bind + " is already in use", () => {
				process.exit(1);
			});
			break;
		default:
			throw error;
	}
}

function onListening(): void {
	console.log(`interview server started at port ${port}`);
}

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);