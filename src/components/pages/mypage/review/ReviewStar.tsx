"use client";
import { useState } from "react";
import CheckedStar from "./CheckedStar";

const starMessage: Record<number, string> = {
  0: "",
  1: "아쉽네요!",
  2: "그냥그래요!",
  3: "보통이에요!",
  4: "좋아요!",
  5: "최고예요!",
};

const ReviewStar = ({
  setReviewRaing,
}: {
  setReviewRaing: (rating: number) => void;
}) => {
  const [starRating, setStarRating] = useState<number>(0);
  const [star, setStar] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const onStarClick = (key: number) => {
    const newStar = { ...star };
    for (let i = 1; i <= 5; i++) {
      newStar[i] = i <= key;
    }
    setStar(newStar);
    setStarRating(key);
    setReviewRaing(key);
  };

  return (
    <div className="mt-[30px]">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-[17px]">구매하신 상품은 어떠셨나요?</h3>
        <p className="font-bold text-[15px]">별점으로 평가해 보세요.</p>
      </div>
      <div className="flex flex-col  mt-[30px] mb-[10px] items-center">
        <div className="h-[18px] ml-[-10px]">
          {Object.keys(star).map((key) => (
            <button className="ml-[10px]" key={key}>
              <CheckedStar
                checked={star[parseInt(key)]}
                onStarClick={() => {
                  onStarClick(parseInt(key));
                }}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center mt-[10px]">
          <span className="text-[14px] font-bold">
            {starMessage[starRating]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewStar;
