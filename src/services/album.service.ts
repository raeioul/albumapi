import { Request, Response } from "express";

export class AlbumService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to albumAPI REST by raeiouL");
  }
}
