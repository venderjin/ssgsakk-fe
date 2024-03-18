import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  onChangeModal: () => void;
};

export default function ModalHeader({ title, onChangeModal }: Props) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="h-[50px] py-[11px] flex items-center justify-center border-b-[#BCBCBC] border-b-[1px]">
      <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
        <button
          onClick={onChangeModal}
          className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"
        ></button>
      </div>

      <h1 className="text-black text-[17px] font-bold align-middle flex items-center font-Pretendard">
        {title}
      </h1>
    </div>
  );
}
