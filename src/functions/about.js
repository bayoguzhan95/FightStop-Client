import axios from "axios";

export const createAbout = async (about, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/about`, about, {
    headers: {
      authtoken,
    },
  });

export const getAboutsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/abouts/${count}`);


  export const removeAbout = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/about/${slug}`, {
    headers: {
      authtoken,
    },
  });

  export const getAbout = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/about/${slug}`);

  export const updateAbout = async (slug, about, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/about/${slug}`, about, {
    headers: {
      authtoken,
    },
  });
