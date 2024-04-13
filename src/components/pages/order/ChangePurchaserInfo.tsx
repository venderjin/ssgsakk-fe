"use client";
import React, { useEffect, useState } from "react";
import { memberOrderState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";
import Modal from "@/components/common/Modal";

interface ChangePurchaserInfoProps {
    isModalOpen: () => void;
    originName: string;
    originPhoneNum: string;
    originEmail: string;
}

const ChangePurchaserInfo = ({ isModalOpen, originName, originPhoneNum, originEmail }: ChangePurchaserInfoProps) => {
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [changeName, setChangeName] = useState<string>("");
    const [changePhoneNum, setChangePhoneNum] = useState<string>("");
    const [changeEmail, setChangeEmail] = useState<string>("");

    function isValidEmail(email: string) {
        // 정규 표현식을 사용하여 이메일 형식 검사
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            setChangeEmail(email);
        }
        return emailRegex.test(email);
    }

    useEffect(() => {
        setChangeName(originName);
        setChangePhoneNum(originPhoneNum);
        setChangeEmail(originEmail);
    }, []);

    return (
        <Modal>
            <div className="h-[42px] py-[11px] flex justify-center border-b-[#BCBCBC] border-b-[1px]">
                <div className="w-[50px] h-[42px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
                    <button onClick={isModalOpen} className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"></button>
                </div>
                <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">주문자정보 변경</h1>
            </div>
            <div className="bg-green-300 px-5 pt-5 ">
                <div>
                    <span className="font-Pretendard text-[20px] font-bold">
                        어느 분에게 <br />
                        주문 알림을 보내드릴까요?
                    </span>
                </div>
                <div className="bg-yellow-200 my-3">
                    <p className="font-Pretendard text-[18px] font-bold">주문자명</p>
                    <form>
                        <input
                            className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                            type="text"
                            value={changeName}
                            onChange={(e) => setChangeName(e.target.value)}
                        />
                    </form>
                </div>
                <div className="bg-yellow-200 my-3">
                    <p className="font-Pretendard text-[18px] font-bold">휴대전화번호</p>
                    <form>
                        <input
                            className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                            type="text"
                            maxLength={11}
                            value={changePhoneNum}
                            onChange={(e) => setChangePhoneNum(e.target.value)}
                        />
                    </form>
                </div>
                <div className="bg-yellow-200 my-3">
                    <p className="font-Pretendard text-[18px] font-bold">이메일</p>
                    <form>
                        <input
                            className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                            type="text"
                            value={changeEmail}
                            onChange={(e) => isValidEmail(e.target.value)}
                        />
                        {changeEmail && !isValidEmail(changeEmail) && (
                            <p className="font-Pretendard text-[12px] text-primary-red">** 올바른 이메일 주소 형식을 입력하세요. **</p>
                        )}
                    </form>
                </div>
            </div>
            <div onClick={isModalOpen} className="bg-primary-red sticky bottom-0 flex justify-center items-center" style={{ height: "calc(13vh - 42px)" }}>
                <p className="font-Pretendard text-[17px] text-white">변경하기</p>
            </div>
        </Modal>
    );
};

export default ChangePurchaserInfo;
