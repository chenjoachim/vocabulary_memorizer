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
    if ((await Word.countDocuments({})) === 0)
      throw "Please enter some words first!";
    else {
      const someWord = await Word.aggregate([{ $sample: { size: 1 } }]);
      console.log(someWord);
      return { eng: someWord[0].English, chi: someWord[0].Chinese };
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
          mes: e.toString(),
        })
      )
    );
});
router.get("/test", (req, res) => {
  randomWord()
    .then((response) => {
      console.log(response);
      res.status(200).send({ type: "success", mes: response });
    })
    .catch((e) => {
      console.log(e);
      res.status(200).send({ type: "error", mes: e.toString() });
    });
});
export default router;
