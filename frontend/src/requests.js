// const API_KEY = "506645bab34cd2a4042367f7587d92a2"

// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

// }
const requests = {
    fetchTrending: `http://localhost:9292/trending`,
    fetchNetflixOriginals: `http://localhost:9292/netflix_originals`,
    fetchTopRated: `http://localhost:9292/top_rated`,
    fetchActionMovies: `http://localhost:9292/action`,
    fetchComedyMovies: `http://localhost:9292/comedy`,
    fetchHorrorMovies: `http://localhost:9292/horror`,
    fetchRomanceMovies: `http://localhost:9292/romance`,
    fetchDocumentaries: `http://localhost:9292/documentaries`,
}

const categoryComments = {
    netflixOriginalComments: "/netflix_originals_comments",
    trendingComments: "/trending_comments",
    topRatedComments: "/top_rated_comments",
    actionComments: "/action_comments",
    comedyComments: "/comedy_comments",
    horrorComments: "/horror_comments",
    romanceComments: "/romance_comments",
    documentaryComments: "documentary_comments"
}
export { requests, categoryComments }