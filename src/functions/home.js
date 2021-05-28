import axios from "axios";

export const createHome = async (home, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/home`, home, {
    headers: {
      authtoken,
    },
  });

export const getHomesByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/homes/${count}`);


  export const removeHome = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/home/${slug}`, {
    headers: {
      authtoken,
    },
  });

  export const getHome = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/home/${slug}`);

  export const updateHome = async (slug, home, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/home/${slug}`, home, {
    headers: {
      authtoken,
    },
  });

  export const getHomes = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/homes`, {
    sort,
    order,
    page,
  });

  export const getHomesCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/homes/total`);