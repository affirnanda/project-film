<<<<<<< HEAD
const API_KEY = "bf2af9f14047a077f6f92256f99ba6b3";
=======
const API_KEY = "";
>>>>>>> 4807e53aa60031bd7d7497c142c7da05e3f03eb9
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
