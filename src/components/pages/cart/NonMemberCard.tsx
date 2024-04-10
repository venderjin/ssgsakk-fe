import Link from "next/link";

const NonMemberCard = () => {
  return (
    <div className="my-[40px] px-[50px] font-Pretendard">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-tool-icon bg-[position:0px_0px] bg-[size:472px_463px] w-[111px] h-[95px] mt-[40px] mb-[20px]" />
        <p className="text-[18px]">장바구니에 담긴 상품이 없습니다.</p>
        <p className="text-[14px] text-[#666666] mt-[10px] text-center">
          로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!
        </p>
        <Link href={"/login?retUrl=cart"} className="w-full mt-[40px]">
          <button className="w-full h-[60px] bg-primary-red text-[18px] text-[#fff]">
            로그인 하기
          </button>
        </Link>
      </div>

      {/* <div className="my-[11px]">
        <div className="flex gap-[3px] items-center">
          <div className="bg-tool-icon bg-[position:-48px_-421px] bg-[size:472px_463px] w-[14px] h-[15px]" />
          <span className="text-[18px] font-bold text-[#222222]">
            로그인을 해보세요.
          </span>
        </div>
        <p className="text-[14px] text-[#666666]">
          로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!
        </p>
      </div>

      <div className="mt-[11px]">
        <Link href={"/login?retUrl=cart"}>
          <button className="w-full h-[37px] border border-[#e5e5e5] text-[13px] text-[#666666]">
            로그인 하기
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default NonMemberCard;
