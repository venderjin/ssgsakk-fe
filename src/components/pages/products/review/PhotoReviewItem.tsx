import Link from "next/link";
import Image from "next/image";

type Props = {
  reviewId: number;
  photoCount: number;
  thumbImage: string;
};

const PhotoReviewItem = ({ reviewId, photoCount, thumbImage }: Props) => {
  return (
    <li className="w-1/3 h-[100px] overflow-hidden relative block">
      <Image
        src={thumbImage}
        fill={true}
        sizes="(max-width: 600px) 100vw, 600px"
        alt="첨부이미지1"
      />
      {photoCount > 1 ? (
        <div className="absolute right-0 bottom-0 h-[22px] w-[22px]">
          <span className="bg-[#000000b3] text-[12px] text-[#fff] inline-flex align-middle justify-center px-[7px]">
            {photoCount}
          </span>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default PhotoReviewItem;
