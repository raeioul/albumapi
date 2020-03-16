import { Application } from "express";
import { AlbumService } from "../services/album.service";
import { ArtistService } from "../services/artist.service";

export class Router {
  private albumService: AlbumService;
  private artistService: ArtistService;

  constructor(private app: Application) {
    this.albumService = new AlbumService();
    this.artistService = new ArtistService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.albumService.welcomeMessage);
    this.app.route("/album/:id").get(this.albumService.getAlbum);
    this.app.route("/albums").get(this.albumService.getAllAlbum);
    this.app.route("/album").post(this.albumService.addNewAlbum);
    this.app.route("/album/:id").put(this.albumService.updateAlbum);
    this.app.route("/album/:id").delete(this.albumService.deleteAlbum);
    this.app.route("/artist").post(this.artistService.addNewArtist);
    this.app.route("/artist/:id").get(this.artistService.getArtist);
    this.app.route("/artists").get(this.artistService.getAllArtist);
    this.app.route("/artist/:id").put(this.artistService.updateArtist);
    this.app.route("/artist/:id").delete(this.artistService.deleteArtist);
  }
}
