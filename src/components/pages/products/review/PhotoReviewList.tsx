import PhotoReviewItem from "./PhotoReviewItem";
import { PhotoReviewType } from "@/types/reviewType";

const PhotoReviewList = ({
  photoReviews,
}: {
  photoReviews: PhotoReviewType[];
}) => {
  return (
    <div className="mt-[15px] px-[20px]">
      <ul className="flex flex-wrap">
        {photoReviews.map((item: any) => (
          <PhotoReviewItem
            key={item.reviewId}
            reviewId={item.reviewId}
            photoCount={item.photoCount}
            thumbImage={item.thumbImage}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoReviewList;
