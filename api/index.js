import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: '5.513986947844601',
          tr_latitude: '5.668430510028145',
          bl_longitude: '-0.2991199442789696',
          tr_longitude: '-0.06033899208693426',
          limit: '30',
          currency: 'USD',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          "X-RapidAPI-Key": "848593ef0amsh12c0a3a808cf694p1d887cjsn91dfe01d2185",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
