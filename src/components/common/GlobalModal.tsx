"use client";
import { useModal } from "@/actions/useModal";

const GlobalModal = () => {
  const { modalDataState, closeModal } = useModal();

  return (
    <>
      {modalDataState.isOpen && (
        <div className="bg-white fixed z-[200] top-0 left-0 w-full h-full overflow-y-scroll font-Pretendard">
          <div
            className={`h-[50px] py-[11px]  justify-center border-b-[#BCBCBC] border-b-[1px] bg-white font-Pretendard ${
              modalDataState.fixed ? "flex sticky top-0 " : "flex items-center"
            }`}
          >
            <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
              <button
                onClick={closeModal}
                className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"
              ></button>
            </div>

            <h1 className="text-black text-[17px] font-bold align-middle flex items-center font-Pretendard">
              {modalDataState.title}
            </h1>
          </div>
          {modalDataState.content}
        </div>
      )}
    </>
  );
};

export default GlobalModal;
