import React from "react";

const ReviewSummaryStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`bg-review-icon 
            ${
              i < rating
                ? `bg-[position:-28px_-161px] bg-[length:220px_179px]`
                : `bg-[position:-56px_-161px] bg-[length:220px_179px]`
            }
            w-[18px] h-[18px]`}
        ></div>
      ))}
    </div>
  );
};

export default ReviewSummaryStar;
