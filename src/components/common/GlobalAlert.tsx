"use client";
import { useAlert } from "@/actions/useAlert";

const GlobalAlert = () => {
    const { alertDataState, closeAlert } = useAlert();
    const confirmHandler = () => {
        if (alertDataState.onConfirmHandler) alertDataState.onConfirmHandler();
        closeAlert();
    };

    return (
        <>
            {alertDataState.isOpen && (
                <div className="font-Pretendard w-[80%] min-h-auto py-2 mx-auto z-[9999] fixed top-[30%] left-[50%] translate-x-[-50%] border border-slate-200 bg-white rounded-xl shadow-xl">
                    <div className="">
                        <p className="px-[20px] py-[30px] text-[14px] text-center whitespace-pre-wrap">{alertDataState.content}</p>
                        {alertDataState.type === "alert" && (
                            <div className="flex justify-center pb-[10px] w-full gap-4">
                                <button onClick={closeAlert} className="rounded-[8px] w-[100px] h-[40px] text-white bg-blue-400">
                                    확인
                                </button>
                            </div>
                        )}
                        {alertDataState.type === "confirm" && (
                            <div className="flex justify-center pb-[10px] w-full gap-4">
                                <button onClick={closeAlert} className="rounded-[8px] w-[100px] h-[40px] bg-gray-200">
                                    취소
                                </button>
                                <button onClick={confirmHandler} className="rounded-[8px] w-[100px] h-[40px] text-white bg-primary-red">
                                    확인
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default GlobalAlert;
