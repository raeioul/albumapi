import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/albumApi.constants";
import { Album } from "../models/album.model";

export class AlbumService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
}
