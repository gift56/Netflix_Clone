const Key = "83be94de5ce8714624cf13462ecb0357";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page1`,
  requestTrending: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page3`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page1`,
};

export default requests;