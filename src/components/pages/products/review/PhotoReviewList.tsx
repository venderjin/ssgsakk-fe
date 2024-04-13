import { useState } from "react";
import Image from "next/image";
import { PoroductReviewType } from "@/types/reviewType";
import PhotoReviewSliderModal from "./PhotoReviewSliderModal";

const PhotoReviewList = ({
  reviewList,
}: {
  reviewList: PoroductReviewType[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const photoReviews = reviewList.filter(
    (review: PoroductReviewType) => review.reviewContentsList
  );

  return (
    <div className="mt-[15px] px-[20px]">
      <>
        {isModalOpen && (
          <PhotoReviewSliderModal
            onChangeModal={() => setIsModalOpen(false)}
            photoReviews={photoReviews}
          />
        )}
      </>

      <ul className="flex flex-wrap">
        {photoReviews.map((item: any) => (
          <li
            onClick={() => setIsModalOpen(true)}
            key={item.reviewSeq}
            className="w-1/3 h-[120px] overflow-hidden relative block"
          >
            <Image
              src={item.reviewContentsList[0].contentUrl}
              fill={true}
              sizes="(max-width: 600px) 100vw, 600px"
              alt="첨부이미지1"
            />
            {item.photoCount > 1 ? (
              <div className="absolute right-0 bottom-0 h-[22px] w-[22px]">
                <span className="bg-[#000000b3] text-[12px] text-[#fff] inline-flex align-middle justify-center px-[7px]">
                  {item.reviewContentsList.length}
                </span>
              </div>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoReviewList;
