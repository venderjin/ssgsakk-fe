import Link from "next/link";

const NonMemberCard = () => {
  return (
    <div className="my-[20px] mx-[16px] font-Pretendard">
      <div className="my-[11px]">
        <div className="flex gap-[3px] items-center">
          <div className="bg-tool-icon bg-[position:-48px_-421px] bg-[size:472px_463px] w-[14px] h-[15px]" />
          <span className="text-[18px] font-bold text-[#222222]">
            로그인을 해보세요.
          </span>
        </div>
        <p className="text-[14px] text-[#666666]">
          장바구니에 담아두신 상품을 나중에도 확인하실 수 있습니다.
        </p>
      </div>

      <div className="mt-[11px]">
        <Link href={"/login"}>
          <button className="w-full h-[37px] border border-[#e5e5e5] text-[13px] text-[#666666]">
            로그인 하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NonMemberCard;
