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

const ReviewStar = () => {
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
  };

  return (
    <div className="flex mt-[30px] mb-[17px] justify-center">
      <div className="w-[142px] h-[18px] ml-[-10px]">
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

      <div className="pl-[8px] w-[80px] flex items-center">
        <span className="text-[14px] font-bold">{starMessage[starRating]}</span>
      </div>
    </div>
  );
};

export default ReviewStar;
