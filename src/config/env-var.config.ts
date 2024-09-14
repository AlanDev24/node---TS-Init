import env from "env-var";
import 'dotenv/config'

export const envs = {
  PORT: env.get("PORT")
    .default(3000)
    .required()
    .asPortNumber(),
};
