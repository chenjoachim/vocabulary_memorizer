import axios from "./axios";

const CreateWord = async (eng, chi) => {
  const {
    data: { type, mes },
  } = await axios.post("/new", {
    eng: eng,
    chi: chi,
  });
  return { type, mes };
};
const RandomWord = async () => {
  const {
    data: { type, mes },
  } = await axios.get("/test");
  return { type, mes };
};
export { CreateWord, RandomWord };
