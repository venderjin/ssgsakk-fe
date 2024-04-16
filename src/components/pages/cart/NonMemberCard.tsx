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
        <Link href={"/login?callbackUrl=cart"} className="w-full mt-[40px]">
          <button className="w-full h-[60px] bg-primary-red text-[18px] text-[#fff]">
            로그인 하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NonMemberCard;
