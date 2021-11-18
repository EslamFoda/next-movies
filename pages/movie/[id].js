import Nav from "../../components/Nav";
import ShowDetails from "../../components/tv/ShowDetails";
import Credits from "../../components/tv/Credits";
import Reviews from "../../components/tv/Reviews";
import Recommends from "../../components/tv/Recommends";
import Footer from "../../components/Footer";
export const getStaticPaths = async () => {
  const pouplarShows = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const pouplarShowsData = await pouplarShows.json();

  const paths = pouplarShowsData.results.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });

  const trendingToday = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const trendingTodayData = await trendingToday.json();

  const todayPaths = trendingTodayData.results.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });

  const thisWeekTrending = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const thisWeekTrendingData = await thisWeekTrending.json();

  const weekPaths = thisWeekTrendingData.results.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });
  return {
    paths: [...paths, ...weekPaths, ...todayPaths],
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US`
  );
  const data = await (await res).json();
  /**** fetch the credits */
  const resCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const creditsData = await resCredits.json();

  /*** fetch the review  */
  const resReviews = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1`
  );
  const reviewsData = await resReviews.json();

  /**** fetch the recommends */
  const resRecommends = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=ed1aa33b88ae96e77b8399f90b321035&language=en-US&page=1`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const dataRecommends = await resRecommends.json();
  return {
    props: {
      show: data,
      credits: creditsData.cast,
      reviews: reviewsData.results,
      recommends: dataRecommends.results,
    },
  };
};

const Details = ({ show, credits, reviews, recommends }) => {
  return (
    <>
      <Nav />
      <ShowDetails tv={show} />
      <Credits credits={credits} />
      <Reviews reviews={reviews} tv={show} />
      <Recommends recommends={recommends} />
      <Footer />
    </>
  );
};

export default Details;
