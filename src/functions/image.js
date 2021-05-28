import axios from "axios";

export const createImage = async (image, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/image`, image, {
    headers: {
      authtoken,
    },
  });

export const getImagesByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/images/${count}`);


  export const removeImage = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/image/${slug}`, {
    headers: {
      authtoken,
    },
  });

  export const getImage = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/image/${slug}`);

  export const updateImage = async (slug, image, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/image/${slug}`, image, {
    headers: {
      authtoken,
    },
  });

  export const getImages = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/images`, {
    sort,
    order,
    page,
  });

  export const getImagesCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/images/total`);