import { Server } from "./presentation/server";
import { config } from "dotenv";

//?carga las configuraciones de dotenv
config();

(async () => {
  main();
})();

async function main() {
  const server = new Server();

  server.start();
}
