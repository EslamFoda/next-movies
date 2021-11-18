import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";
import Link from "next/link";
// install Swiper modules
SwiperCore.use([Scrollbar]);
import Image from "next/image";
const TvCard = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <Swiper
      className="pouplerSlider"
      spaceBetween={20}
      slidesPerView={7.2}
      scrollbar={{
        hide: true,
      }}
    >
      {data.map((show) => (
        <SwiperSlide key={show.id}>
          <div className="singleShow">
            {" "}
            {show.name ? (
              <Link href={`/tv/${show.id}`}>
                <a>
                  <div className="show-img-container">
                    <Image
                      layout="fill"
                      src={
                        `${BASE_URL}${show.poster_path}` ||
                        `${BASE_URL}${show.backdrop_path}`
                      }
                      alt="Picture of the author"
                    />
                    <div className="rate-container">
                      <span className="rate">{show.vote_average}</span>
                    </div>
                  </div>
                </a>
              </Link>
            ) : (
              <Link href={`/movie/${show.id}`}>
                <a>
                  <div className="show-img-container">
                    <Image
                      layout="fill"
                      src={
                        `${BASE_URL}${show.poster_path}` ||
                        `${BASE_URL}${show.backdrop_path}`
                      }
                      alt="Picture of the author"
                    />
                    <div className="rate-container">
                      <span className="rate">{show.vote_average}</span>
                    </div>
                  </div>
                </a>
              </Link>
            )}
            <div className="show-name-date">
              {show.name ? (
                <Link href={`/tv/${show.id}`}>
                  <a className="show-name text-sm">{show.name}</a>
                </Link>
              ) : (
                <Link href={`/movie/${show.id}`}>
                  <a className="show-name text-sm">{show.title}</a>
                </Link>
              )}
              {show.first_air_date ? (
                <span className=" text-sm block">
                  {show.first_air_date}
                </span>
              ) : (
                <span className=" text-sm block">
                  {show.release_date}
                </span>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TvCard;
