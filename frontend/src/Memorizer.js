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

export { CreateWord };
