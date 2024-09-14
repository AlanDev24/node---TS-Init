import { envs } from "./config/env-var.config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


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
