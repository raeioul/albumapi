import { Application } from "express";
import { AlbumService } from "./services/album.service";

export class Controller {
  private albumService: AlbumService;

  constructor(private app: Application) {
    this.albumService = new AlbumService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.albumService.welcomeMessage);
  }
}
