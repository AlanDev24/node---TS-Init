import { Request, Response } from "express";

export class EntityController {
  constructor() {}

  public getEntity = (req: Request, res: Response) => {
    return res.json({
      ok: true,
      msg: "Hola mundo :D",
      entity: 'this is an Entity LOL'
    });
  };
}
