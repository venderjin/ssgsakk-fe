"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReviewStar from "@/components/pages/mypage/review/ReviewStar";
//import { createReview } from "@/actions/review";
import { useGetClientToken } from "@/actions/useGetClientToken";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { writableReviewState } from "@/recoil/atoms/reviewState";

const ReviewEditor = ({ type }: { type: string }) => {
  const router = useRouter();
  const token = useGetClientToken();
  const [content, setContent] = useState<string>("");
  const [contentCount, setContentCount] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [reviewRating, setReviewRaing] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const reviewInfo = useRecoilValue(writableReviewState);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setContentCount(e.target.value.length);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    if (!targetFiles) return;

    if (images.length >= 3)
      return alert("이미지는 최대 3개까지 첨부 가능합니다.");

    //이미지를 업로드할 때까지 로딩처리
    setIsLoading(true);

    const targetFilesArray = Array.from(targetFiles);
    const file = targetFilesArray[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "review");
    formData.append("priority", (images.length + 1).toString());

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setImages([...images, data.fileName]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (index: number) => {
    const fileName = images[index];

    const formData = new FormData();
    formData.append("fileName", fileName);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "DELETE",
        body: formData,
      });

      if (response.ok) {
        const updateImages = images.filter((_, i) => i !== index);
        setImages(updateImages);
      }
    } catch (error) {
      console.log(error);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const submitHandler = async () => {
    if (content.length < 10) return alert("10자 이상 입력해주세요.");
    if (reviewRating === 0) return alert("별점을 선택해주세요.");

    const imageData = images.map((imageName, index) => ({
      priority: index + 1,
      contentUrl: imageName,
      contentsDescription: "리뷰이미지",
    }));

    const res = await fetch(`${process.env.BASE_URL}/reviews`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purchaseProductSeq: reviewInfo.purchaseProductSeq,
        productSeq: reviewInfo.productSeq,
        purchaseProductOption: reviewInfo.purchaseProductOption,
        reviewParagraph: content,
        reviewContentsVoList: imageData,
        reviewScore: reviewRating,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("리뷰가 등록되었습니다.");

      router.replace("/mypage/reviewList/written");
    } else {
      console.log(data);
    }
  };

  return (
    <div className="px-[15px] font-Pretendard ">
      <hr className="border-t border-t-[#e5e5e5]" />
      {/* 리뷰 작성 별점 */}
      <ReviewStar setReviewRaing={setReviewRaing} />

      <h3 className="text-primary-red text-[14px] font-bold text-left pt-[30px] pb-[10px]">
        상품의 어떤 점이 좋았나요?
      </h3>

      {/* 텍스트 작성 */}
      <div className="relative border border-[#222] bg-[#fff] rounded-[8px] mb-[28px] overflow-visible">
        <textarea
          className="min-h-[190px] overflow-y-auto py-[15px] pl-[11px] pr-[23px] bg-transparent w-full h-full text-[13px]"
          minLength={10}
          maxLength={2000}
          onChange={onChangeContent}
        />

        <span className="absolute bottom-[-28px] right-[7px] text-[12px] text-[#969696]">
          <em className="text-[#777] not-italic">{contentCount}</em> / 2000(10자
          이상)
        </span>

        <span className="absolute bottom-[-28px] left-0 text-[12px] text-[#777] flex items-center">
          <div className="bg-review-icon bg-[position:-204px_-125px] bg-[length:220px_179px] w-[14px] h-[14px] mr-[5px]"></div>
          <button type="button">리뷰 등록/혜택 안내</button>
        </span>
      </div>

      {/* 미디어 첨부 */}
      <div className="pt-[16px] mb-[200px]">
        <div className="mt-[22px] flex">
          <div className="flex items-center mr-[17px]">
            <div className="bg-review-icon bg-[position:-152px_-129px] bg-[length:220px_179px] w-[19px] h-[16px] mr-[5px]"></div>
            <input
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <button
              onClick={() => inputRef.current?.click()}
              className="text-[#222] text-[14px] font-bold"
              type="button"
            >
              앨범보기
            </button>
          </div>
          <div className="flex items-center">
            <div className="bg-review-icon bg-[position:0px_-161px] bg-[length:220px_179px] w-[18px] h-[18px] mr-[5px]"></div>
            <button className="text-[#222] text-[14px] font-bold" type="button">
              동영상
            </button>
          </div>
        </div>

        {/* 첨부 미디어 미리보기 */}

        <div className="mt-[20px]">
          <ul className="flex gap-2">
            {images.map((image, index) => (
              <li key={index}>
                <div className="overflow-hidden relative w-[80px] min-h-[80px] rounded-[8px] flex-shrink: 0">
                  <Image
                    src={image}
                    alt="첨부이미지"
                    fill={true}
                    sizes="(max-width: 600px) 100vw, 600px"
                    onLoad={() => setIsLoading(false)}
                  />
                  <div
                    onClick={() => deleteHandler(index)}
                    className="absolute top-[7px] right-[5px] bg-review-icon bg-[position:-104px_-54px] bg-[length:220px_179px] w-[25px] h-[25px] mr-[5px]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#fff] p-[15px] border-t border-t-[#f8f8f8]">
        <button
          onClick={submitHandler}
          className="bg-[#222] text-[#fbfbfb] text-[15px] rounded-[8px] h-[40px] w-full"
        >
          {type === "write" ? "등록" : "수정"}
        </button>
      </div>
    </div>
  );
};

export default ReviewEditor;
