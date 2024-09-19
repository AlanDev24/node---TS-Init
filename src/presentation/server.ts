import express, { Router } from "express";

interface Options {
  routes: Router;
  port: number;
}

export class Server {
  private app = express();
  private readonly routes: Router;
  private readonly port: number;

  constructor(options: Options) {
    const { routes, port } = options;
    this.routes = routes;
    this.port = port;
  }

  async start() {
    this.app.listen(this.port || 3000);
    this.app.use(express.json());

    //* Routes
    this.app.use(this.routes);

    console.log(`App runing on port ${this.port}`);
  }
}
