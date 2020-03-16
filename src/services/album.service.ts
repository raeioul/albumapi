import { Request, Response } from 'express';
import { MongooseDocument } from 'mongoose';
import { Album } from '../models/album.model';
import { WELCOME_MESSAGE } from '../constants/albumApi.constants';

export class AlbumService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllAlbum(req: Request, res: Response) {
    Album.find({}, (error: Error, album: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(album);
    });
  }

  public getAlbum(req: Request, res: Response) {
    const albumID = req.params.id;
    Album.findById(albumID, (error: Error, album: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(album);
    });
  }

  public addNewAlbum(req: Request, res: Response) {
    const newAlbum = new Album(req.body);
    newAlbum.save((error: Error, album: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(album);
    });
  }

  public updateAlbum(req: Request, res: Response) {
      const albumID = req.params.id;
      Album.findByIdAndUpdate(
        albumID,
        req.body,
        (error: Error, album: any) => {
          if (error) {
            res.send(error);
          }
          const message = album
            ? 'Updated successfully'
            : 'Album not found :(';
          res.send(message);
        }
      );
  }

  public deleteAlbum(req: Request, res: Response) {
    const albumID = req.params.id;
    Album.findByIdAndDelete(albumID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Album not found :(';
      res.send(message);
    });
  }

}
