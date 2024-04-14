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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const photoModalHandler = (index: number) => {
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const photoReviews = reviewList.filter(
    (review: PoroductReviewType) => review.reviewContentsList.length > 0
  );

  return (
    <div className="mt-[15px] px-[20px]">
      <>
        {isModalOpen && (
          <PhotoReviewSliderModal
            currentIndex={currentIndex}
            onChangeModal={() => setIsModalOpen(false)}
            photoReviews={photoReviews}
          />
        )}
      </>

      <ul className="flex flex-wrap">
        {photoReviews.map((item: any, index) => (
          <li
            onClick={() => photoModalHandler(index)}
            key={item.reviewSeq}
            className="w-1/3 h-[120px] overflow-hidden relative block"
          >
            <Image
              src={item.reviewContentsList[0].contentUrl}
              width={600}
              height={400} // Replace with the actual dimensions of your image
              alt="첨부이미지1"
            />
            {item.reviewContentsList.length > 1 ? (
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
