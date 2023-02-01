import express from "express";
import Word from "../models/word";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());
const newWord = async (eng, chi) => {
  try {
    const oldWord = await Word.findOne({ English: eng });
    if (oldWord) {
      await Word.updateOne({ English: eng }, { $set: { Chinese: chi } });
      return { type: "Updating", word: eng };
    } else {
      await Word.create({ English: eng, Chinese: chi });
      return { type: "Creating", word: eng };
    }
  } catch (e) {
    throw e;
  }
};
const randomWord = async () => {
  try {
    if (Word.size() === 0) throw "Please enter some words first!";
    else {
      const someWord = await Word.aggregate([{ $sample: { size: 1 } }]);
      return { eng: someWord.eng, chi: someWord.chi };
    }
  } catch (e) {
    throw e;
  }
};
router.post("/new", (req, res) => {
  newWord(req.body.eng, req.body.chi)
    .then((response) =>
      res.status(200).send({ type: "success", mes: response })
    )
    .catch((e) =>
      res.status(
        (200).send({
          type: "error",
          mes: e,
        })
      )
    );
});
export default router;
