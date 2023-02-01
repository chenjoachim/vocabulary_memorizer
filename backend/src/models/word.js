import mongoose from "mongoose";
const Schema = mongoose.Schema;
const WordSchema = new Schema({
  English: String,
  Chinese: String,
});
const Word = mongoose.model("Word", WordSchema);
export default Word;
