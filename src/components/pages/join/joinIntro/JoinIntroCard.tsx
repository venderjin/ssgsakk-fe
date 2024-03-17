import React from "react";
import { joinIntroCouponDatas } from "@/libs/joinIntroDatas";
import Image from "next/image";
import Link from "next/link";

const JoinIntroCard = () => {
  return (
    <div>
      <div className="pt-[40px] pb-[30px] px-[20px]">
        <p className="font-bold text-[20px] text-left text-[#222] font-Pretendard">
          믿고 사는 즐거움
          <br />
          SSG.COM에 오신것을 환영합니다.
        </p>
      </div>

      <div className="px-[20px] py-[15px] bg-[#f8f8f8]">
        <h3 className="text-[14px] font-medium text-[#666] font-Pretendard">
          신세계포인트 통합회원
        </h3>
      </div>

      <p className="mt-[20px] px-[20px] text-[14px] text-[#444] font-Pretendard">
        신세계 유니버스 클럽 3개월 무료체험이 제공됩니다.
        <br />
        매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
      </p>

      <p className="mt-[8px] px-[20px] text-[14px] text-[#444] font-Pretendard">
        * 멤버십은 3개월 후 자동 해지 됩니다.
      </p>

      <div className="px-[20px] text-[#666]">
        <ul className="mt-[16px] mb-[20px] px-[40px] pt-[32px] pb-[30px] bg-[#fafafa]">
          {joinIntroCouponDatas.map((coupon) => (
            <li key={coupon.id} className="w-full h-[80px] flex items-center">
              <Image
                src={coupon.url}
                width={109}
                height={80}
                alt={coupon.title}
              />
              <span className="text-[14px] text-[#444] font-Pretendard whitespace-pre-wrap">
                {coupon.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-[30px]">
          <button className="base-btn bg-[#ff5452] text-white font-bold">
            멤버십 혜택 받고 통합회원 가입하기
          </button>

          <Link href="/join/auth">
            <button className="base-btn bg-[#00000033] text-white font-bold mt-[10px]">
              통합회원만 가입하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinIntroCard;
