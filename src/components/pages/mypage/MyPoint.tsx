import Link from "next/link";

const member = {
  name: "서여진",
  point: 1000,
};

const MyPoint = () => {
  return (
    <section className="pt-[24px] pb-[80px] relative overflow-hidden font-Pretendard">
      <div className="px-[16px]">
        <Link href="/">
          <span className="text-[24px] text-[#22222]">{member.name} 님</span>
        </Link>

        <Link className="mt-[8px]" href="/">
          <div>
            <span className="text-[20px]">SSG에서 이번 달</span>
          </div>
          <div>
            <span className="text-[20px] leading-5">
              <strong>{member.point.toLocaleString()}포인트 혜택</strong>을
              받았어요
            </span>
          </div>
        </Link>

        <div className="flex justify-between relative mt-[12px]">
          {/* 쿠폰 */}
          <div className="flex flex-col items-center h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link href="/">
              <span className="text-[14px]">쿠폰</span>
              <div>
                <strong className="text-[18px]">0</strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">장</span>
              </div>
            </Link>

            <Link
              className="mt-[15px] bg-[#222222] text-[#fff] text-[12px] px-[12px] py-[3px] h-[20px] rounded-[3px] box-border"
              href="/"
            >
              쿠폰함
            </Link>
          </div>
          {/* SSG MONEY */}
          <div className="flex flex-col items-center  h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link className="flex flex-col items-center" href="/">
              <span className="text-[14px]">SSG MONEY</span>
              <div>
                <strong className="text-[18px]">0</strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">원</span>
              </div>
            </Link>
          </div>

          {/* 신세계포인트 */}
          <div className="flex flex-col items-center h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link className="flex flex-col items-center" href="/">
              <span className="text-[14px]">신세계포인트</span>
              <div>
                <strong className="text-[18px]">
                  {member.point.toLocaleString()}
                </strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">point</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPoint;
