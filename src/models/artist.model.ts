import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
});

export const Artist = mongoose.model("Artist", ArtistSchema);
