import Link from "next/link";
import Image from "next/image";

type Props = {
  reviewId: number;
  photoCount: number;
  thumbImage: string;
};

const PhotoReviewItem = ({ reviewId, photoCount, thumbImage }: Props) => {
  return (
    <li className="w-1/3 h-[100px] overflow-hidden">
      <Image src={thumbImage} width={500} height={500} alt="첨부이미지1" />
    </li>
  );
};

export default PhotoReviewItem;
