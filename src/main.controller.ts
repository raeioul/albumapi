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
    this.app.route("/album/:id").get(this.albumService.getAlbum);
    this.app.route("/albums").get(this.albumService.getAllAlbum);
    this.app.route("/album").post(this.albumService.addNewAlbum);
    this.app.route("/album/:id").delete(this.albumService.deleteAlbum);
    this.app.route("/album/:id").put(this.albumService.updateAlbum);
  }
}
