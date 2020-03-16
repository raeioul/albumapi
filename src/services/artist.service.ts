import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { Album } from "../models/album.model";
import { Artist } from "../models/artist.model";

export class ArtistService {
  public getArtist(req: Request, res: Response) {
    const artistID = req.params.id;
    Artist.findById(artistID, (error: Error, artist: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(artist);
    });
  }

  public getAllArtist(req: Request, res: Response) {
    Artist.find({}, (error: Error, artist: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(artist);
    });
  }

  public addNewArtist(req: Request, res: Response) {
    if(req.body.id==null){
      res.send('We need and album ID first to add an artist');
    } else {
      const newArtist = new Artist({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
      });
      Album.findById(req.body.id, (error: Error, album: any) => {
        album.artists.push(newArtist);
        album.save();
      });
      newArtist.save((error: Error, album: MongooseDocument) => {
        if (error) {
          res.send(error);
        }
        const message = newArtist
          ? "Artist added successfully"
          : "Artist not found :(";
        newArtist.save();
        res.send(message);
      });
    }
  }

  public updateArtist(req: Request, res: Response) {
    const artistID = req.params.id;
    Artist.findByIdAndUpdate(
      artistID,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
      },
      (error: Error, artist: any) => {
        if (error) {
          res.send(error);
        }
        const message = artist ? "Updated successfully" : "Artist not found :(";
        Album.findById(req.body.id, (error: Error, album: any) => {
          album.artists.pop(Artist.findById(artistID));
          album.artists.push({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate
          });
          album.save();
        });
        res.send(message);
      }
    );
  }

  public deleteArtist(req: Request, res: Response) {
    const artistID = req.params.id;
    Artist.findByIdAndDelete(artistID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? "Deleted successfully" : "Artist not found :(";
      Album.findById(req.body.id, (error: Error, album: any) => {
        album.artists.pop(Artist.findById(artistID));
        album.save();
      });
      res.send(message);
    });
  }
}
