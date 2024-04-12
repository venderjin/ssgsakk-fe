"use client";
import Image from "next/image";
import Link from "next/link";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import { PhotoReviewType } from "@/types/reviewType";
import { useRecoilState } from "recoil";
import { isPhotoReviewAllModalOpen } from "@/recoil/atoms/reviewState";

const PhotoReviewPreview = ({
  photoReviews,
}: {
  photoReviews: PhotoReviewType[];
}) => {
  const [isPhtoModalOpen, setIsPhotoModalOpen] = useRecoilState(
    isPhotoReviewAllModalOpen
  );

  return (
    <div className="mt-[20px] h-full w-full">
      <div className="mb-[16px] flex justify-between">
        <span className="text-[16px] text-[#222] font-bold">
          포토&동영상 리뷰
        </span>
        <button
          onClick={() => setIsPhotoModalOpen(true)}
          className="flex items-center"
        >
          <span className="text-[13px] text-[#777]">
            더보기({photoReviews && photoReviews.length})
          </span>
          <RightHalfTriangle color="#777" />
        </button>
      </div>

      <div className="overflow-hidden">
        <ul className="px-[16px] mx-[-20px] overflow-x-auto flex flex-nowrap">
          {photoReviews &&
            photoReviews.map((review, index) => (
              <li
                key={index}
                className={`min-w-[25%] ${!index ? "" : "ml-[10px]"} `}
              >
                <Link href="/">
                  <div className="relative w-[85px] min-h-[80px]">
                    <Image
                      src={review.thumbImage}
                      alt="첨부이미지"
                      fill={true}
                      sizes="(max-width: 600px) 100vw, 600px"
                      className="rounded-[8px]"
                    />
                  </div>
                </Link>
              </li>
            ))}
          {photoReviews && photoReviews.length > 4 && (
            <li className="w-min-[25%] ml-[10px]">
              <button
                onClick={() => setIsPhotoModalOpen(true)}
                className="relative w-[85px] min-h-[80px] rounded-[8px] bg-[#f0f0f0] text-[#777] flex flex-col items-center justify-center"
              >
                <div className="bg-product-icon bg-[position:-60px_-408px] bg-[length:524px_479px] w-[20px] h-[20px] mb-[2px] block" />
                <span className="text-[12px]">더보기</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PhotoReviewPreview;
