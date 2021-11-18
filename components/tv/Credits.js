import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../assets/user.svg";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar]);
import Image from "next/image";
const Credits = ({ credits }) => {
  const johnDoe =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
  return (
    <div className="credits-container">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Full Cast</h1>
        </div>
      </div>
      <div className="px-2">
        <Swiper
          className="pouplerSlider"
          spaceBetween={20}
          slidesPerView={7}
          scrollbar={{
            hide: true,
          }}
        >
          {credits.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div className="singleCast">
                <div className="cast-img-container">
                  {cast.profile_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w400${cast.profile_path}`}
                      alt=""
                      layout="fill"
                      className={"image"}
                    />
                  ) : (
                    <Image src={user} alt="" layout="fill" className="image" />
                  )}
                </div>
                <div className="cast-details">
                  <h1 className="cast-orginalname">{cast.original_name}</h1>
                  <span className="text-xs">{cast.character}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Credits;
