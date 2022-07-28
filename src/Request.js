const Key = "83be94de5ce8714624cf13462ecb0357";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=&language=enUS&page1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=enUS&page1`,
  requestTrending: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=enUS&page2`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=enUS&page1`,
};
