import express from "express";

export class Server {
  private app = express();

  async start() {
    const port = process.env.PORT;
    this.app.listen(port || 3000);
    console.log(`App runing on port ${port}`);
  }
}
