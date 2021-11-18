import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Home/Hero";
import Popular from "../components/Home/Popular";
import Trending from "../components/Home/Trending";
import Leaderboard from "../components/Home/Leaderboard";
import Footer from "../components/Footer";
export async function getStaticProps() {
  /****fetching pouplar shows */
  const pouplarShows = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const pouplarShowsData = await pouplarShows.json();
  /****fetching pouplar movies */
  const pouplarMovies = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const pouplarMoviesData = await pouplarMovies.json();

  /****fetching trending today */
  const trendingToday = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const trendingTodayData = await trendingToday.json();
  /****fetching trending this week */
  const thisWeekTrending = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const thisWeekTrendingData = await thisWeekTrending.json();
  return {
    props: {
      shows: pouplarShowsData.results,
      movies: pouplarMoviesData.results,
      trendingTvShows: trendingTodayData.results,
      trendingThisWeek: thisWeekTrendingData.results,
    }, // will be passed to the page component as props
  };
}
export default function Home({
  shows,
  movies,
  trendingTvShows,
  trendingThisWeek,
}) {
  console.log(trendingThisWeek);
  return (
    <>
      <Nav />
      <Hero />
      <Popular shows={shows} movies={movies} />
      <Trending
        trendingToday={trendingTvShows}
        trendingThisWeek={trendingThisWeek}
      />
      <Leaderboard />
      <Footer />
    </>
  );
}
