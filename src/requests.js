const API_KEY = "ca3d2aac408d2744766633c00309a87c";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&with_network=213`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export default requests;
