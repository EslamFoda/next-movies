import Image from "next/image";
const Reviews = ({ reviews, tv }) => {
  return (
    <div class="review-section bg-gray-100 pb-2">
      <div class="Popular-section">
        <div class="ontv-flex">
          <h1>Social</h1>
          <h1 class="review">Reviews</h1>
        </div>
      </div>
      <div>
        <div class="reviews-list" key="review.id">
          {reviews.map((review) => (
            <div class="single-review bg-white" key={review.id}>
              <div class="mr-4">
                <div class="review-img-container">
                  {review.author_details.avatar_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w64_and_h64_face${review.author_details.avatar_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div>
                <h1 class="font-bold text-lg text-black">
                  A review by {review.author_details.username}
                </h1>
                <span class="text-gray-500 text-sm">
                  Written by{" "}
                  <span class="text-black">
                    {review.author_details.username}
                  </span>{" "}
                  on {review.created_at}
                </span>
                <p class="text-sm mt-4 text-gray-600">
                  {review.content.substr(0, 400) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {reviews.length === 0 && (
        <div class="reviews-list pb-8">
          <p class="py-4">
            We don't have any reviews for {tv.name || tv.original_title}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
