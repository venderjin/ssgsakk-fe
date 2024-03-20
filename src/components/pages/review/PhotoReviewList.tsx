import { useEffect, useState } from "react";
import PhotoReviewItem from "./PhotoReviewItem";

async function getProductData(productId: number) {
  const res = await fetch(
    `http://localhost:3300/photoReviewList?productId=${productId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("network error");
  }

  const data = await res.json();
  return data[0].reviewList;
}

const PhotoReviewList = ({ productId }: { productId: number }) => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProductData(productId);
      setPhotoList(result);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[15px] px-[20px]">
      <ul className="flex flex-wrap">
        {photoList.map((item: any) => (
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
