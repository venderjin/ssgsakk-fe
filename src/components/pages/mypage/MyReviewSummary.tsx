import Link from "next/link";

const MyReviewSummary = () => {
  return (
    <div className="px-[16px] pb-[50px]">
      <div className="flex items-center justify-between">
        <Link href={"/myPage/review"} className="flex items-center">
          <strong className="text-[18px] mr-[5px]">상품 리뷰 작성</strong>
        </Link>
      </div>

      <p className="mt-[10px] text-[13px] text-[#777777] leading-5">
        믿고 사는 즐거움을 리뷰로 남겨주세요!
        <br />
        다른 고객들에게 많은 도움이 됩니다.
        <br />
        리뷰 작성 시, 스페셜 리뷰 <strong>1,000</strong>원, 한달 사용 리뷰는
        <strong> 300</strong>원, 쓱찬스/일반 리뷰는 <strong>50</strong>원의
        <strong> SSG MONEY</strong>가 지급됩니다.
      </p>

      <div className="mt-[16px] h-[45px] px-[16px] rounded-[10px] border-[2px] border-[#f5f5f5] flex items-center justify-between text-[13px]">
        <strong className="basis-2/3 text-[#222222]">
          지금 작성가능한 리뷰
        </strong>

        <div className="basis-1/3 flex items-center">
          <Link
            href={"/myPage/review"}
            className="w-full flex justify-center items-center "
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">일반</span>
            <strong className="text-[#cfcfcf]">0</strong>
          </Link>
          <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
          <Link
            href={"/myPage/review"}
            className="w-full flex justify-center items-center"
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">스페셜</span>
            <strong className="text-[#cfcfcf]">0</strong>
          </Link>
        </div>
      </div>

      <p className="mt-[50px] text-[14px] text-[#969696] text-center">
        당신의 소중한 리뷰를 기다립니다.
      </p>
    </div>
  );
};

export default MyReviewSummary;
