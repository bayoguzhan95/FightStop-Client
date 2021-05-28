import axios from "axios";

export const createTrainer = async (trainer, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/trainer`, trainer, {
    headers: {
      authtoken,
    },
  });

export const getTrainersByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/trainers/${count}`);


  export const removeTrainer = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/trainer/${slug}`, {
    headers: {
      authtoken,
    },
  });

  export const getTrainer = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/trainer/${slug}`);

  export const updateTrainer = async (slug, trainer, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/trainer/${slug}`, trainer, {
    headers: {
      authtoken,
    },
  });
