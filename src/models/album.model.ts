import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  releaseDate: Date,
  rating: Number,
  title: String,
  year: Date,
});

export const Album = mongoose.model("Album", AlbumSchema);
