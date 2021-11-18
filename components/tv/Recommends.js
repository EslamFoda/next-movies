import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";
import Link from "next/link";
// install Swiper modules
SwiperCore.use([Scrollbar]);
import Image from "next/image";
const Recommends = ({ recommends }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="recommends-container ">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Recommendations</h1>
        </div>
      </div>
      <div className="px-2">
        {" "}
        <Swiper
          spaceBetween={20}
          slidesPerView={4.5}
          scrollbar={{
            hide: true,
          }}
        >
          {recommends.map((recommend) => (
            <SwiperSlide key={recommend.id} className="pb-4">
              <div className="single-recommend">
                <div className="recommend-img-container">
                  <Image
                    src={`${BASE_URL}${
                      recommend.backdrop_path || recommend.poster_path
                    }`}
                    alt=""
                    layout="fill"
                    className={"image"}
                  />
                </div>

                <div>
                  {recommend.name ? (
                    <Link href={`/tv/${recommend.id}`}>
                      <a className="font-bold text-black text-xs pb-4 pt-2 show-name">
                        {recommend.name}
                      </a>
                    </Link>
                  ) : (
                    <Link href={`/movie/${recommend.id}`}>
                      <a className="font-bold text-black text-xs pb-4 pt-2 show-name">
                        {recommend.original_title}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {recommends.length === 0 && (
        <div className="px-10 pb-8">We don't have any recommends.</div>
      )}
    </div>
  );
};

export default Recommends;
