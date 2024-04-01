"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const ReviewEditor = () => {
  const [content, setContent] = useState<string>("");
  const [contentCount, setContentCount] = useState<number>(0);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLButtonElement>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setContentCount(e.target.value.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    if (!files) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    //로딩이 완료되면
    fileReader.onload = (e: any) => {
      if (typeof e.target.result === "string") console.log(e.target.result);
    };
  };

  return (
    <div className="px-[15px]">
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
      <div className="pt-[16px] mb-[20px]">
        <div className="mt-[22px] flex">
          <div className="flex items-center mr-[17px]">
            <div className="bg-review-icon bg-[position:-152px_-129px] bg-[length:220px_179px] w-[19px] h-[16px] mr-[5px]"></div>
            <input type="file" ref={inputRef} style={{ display: "none" }} />
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
        <div className="h-[200px]">
          <ul className="overflow-hidden mt-[20px] mx-[-4px]">
            <li>
              <div className="overflow-hidden block relative max-w-[80px] min-h-[80px] rounded-[8px]">
                <Image
                  src="https://succ.ssgcdn.com/uphoto/202403/20240331200616_1215669319_0_1.jpg"
                  alt="첨부이미지"
                  fill={true}
                  sizes="(max-width: 600px) 100vw, 600px"
                />

                <div className="absolute top-[7px] right-[5px] bg-review-icon bg-[position:-104px_-54px] bg-[length:220px_179px] w-[25px] h-[25px] mr-[5px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewEditor;
