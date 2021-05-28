import axios from "axios";

export const createTraining = async (training, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/training`, training, {
    headers: {
      authtoken,
    },
  });

export const getTrainingsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/trainings/${count}`);


  export const removeTraining = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/training/${slug}`, {
    headers: {
      authtoken,
    },
  });

  export const getTraining = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/training/${slug}`);

  export const updateTraining = async (slug, training, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/training/${slug}`, training, {
    headers: {
      authtoken,
    },
  });
