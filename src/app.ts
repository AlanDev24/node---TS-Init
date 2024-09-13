import { envs } from "./config/env-var.config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { config } from "dotenv";

//?carga las configuraciones de dotenv
config();

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    routes: AppRoutes.routes,
    port: envs.PORT,
  });

  server.start();
}
