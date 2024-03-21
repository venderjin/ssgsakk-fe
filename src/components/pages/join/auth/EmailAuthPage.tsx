import React from "react";

const EmailAuthPage = () => {
  return (
    <div className="bg-[#f0f0f0] px-[15px]">
      {/* 약관동의 */}
      <section className="h-[234px]"></section>

      {/* 이메일 인증 */}
      <section className="mt-[20px]">
        <div className="h-[51px] pt-[13px] pb-[12px] px-[15px] bg-[#fff]">
          <input
            className="h-[25px] text-[14px] text-[#222]"
            type="eamil"
            placeholder="이메일주소 입력"
          />
        </div>

        {/* 인증코드 발송 버튼 클릭 시 노출 */}
        <div className="flex flex-col h-[72.5px] pt-[13px] pb-[12px] px-[15px] border-t border-t-[#f0f0f0] bg-[#fff]">
          <input
            className="h-[25px] text-[14px] text-[#222]"
            type="text"
            placeholder="인증번호"
          />
          <span className="pt-[5px] text-[11px] text-[#ff6967] ">
            인증번호 유효시간 3분
          </span>
        </div>
        <button className="base-btn bg-[#ff5452] text-white font-medium">
          인증코드 발송
        </button>
        <button className="base-btn bg-[#ff5452] text-white font-medium">
          확인
        </button>
      </section>

      {/* 안내문구 */}
      <section className="h-[74px] mt-[20px] "></section>
    </div>
  );
};

export default EmailAuthPage;
