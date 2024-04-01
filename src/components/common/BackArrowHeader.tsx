"use client";
type Props = {
  title: string;
};

const BackArrowHeader = ({ title }: Props) => {
  return (
    <div className="h-[42px] py-[11px] flex justify-center border-b-[#BCBCBC] border-b-[1px]">
      <div className="w-[50px] h-[42px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
        <button
          onClick={() => window.history.back()}
          className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"
        ></button>
      </div>

      <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">
        {title}
      </h1>
    </div>
  );
};

export default BackArrowHeader;
