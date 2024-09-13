import env from "env-var";

export const envs = {
  PORT: env.get("PORT")
    .default(3000)
    .required()
    .asPortNumber(),
};
