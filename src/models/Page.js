const { Schema, models, model } = require("mongoose");

const PageSchema = new Schema({
  uri: { type: String, required: true, unique: true, min: 2 },
  owner: { type: String, required: true },
});

export const Page = models?.Page || model("Page", PageSchema);
