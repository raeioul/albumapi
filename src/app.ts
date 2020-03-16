import express, { Application } from 'express';
import { Router } from './routes/router';
import { MONGO_URL } from './constants/albumApi.constants';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public app: Application;
  public router: Router;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.router = new Router(this.app);
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true
    });
  }
}

export default new App().app;
