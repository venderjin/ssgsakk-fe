"use client";
import React, { useState } from "react";

import SliderModalHeader from "@/components/common/SliderModalHeader";
import SliderModal from "@/components/common/SliderModal";
import { useGetClientToken } from "@/actions/useGetClientToken";

interface LikeFolderManagerProps {
    folder: string[];
}

const LikeFolderManager = ({ folder }: LikeFolderManagerProps) => {
    const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState<boolean>(false);
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState<boolean>(false);
    // const [modifyFolderNameLength, setModifyFolderNameLength] = useState<number>(0);
    const [newFolderNameLength, setNewFolderNameLength] = useState<number>(0);
    const [newFolderName, setNewFolderName] = useState<string>("");
    const token = useGetClientToken();

    const ModalHandler = () => {
        setIsAddFolderModalOpen(!isAddFolderModalOpen);
    };

    const CreateFolderModalHandler = () => {
        setIsCreateFolderModalOpen(!isCreateFolderModalOpen);
        console.log("CreateFolderModalHandler");
    };

    const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewFolderNameLength(e.target.value.length);
        setNewFolderName(e.target.value);
    };

    const GetCreateFolder = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(newFolderName);
        e.preventDefault();
        const res = await fetch(`${process.env.BASE_URL}/likes/folder/add?folder-name=${newFolderName}`, {
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    };

    return (
        <>
            <div onClick={ModalHandler} className="flex-none w-[57px] bg-green-200 mx-2">
                <div className="rounded-full bg-white border-[1px] border-gray-300 w-[57px] h-[57px] flex justify-center items-center">
                    <div className="bg-like-icon position bg-[position:-67px_0px] bg-[size:180px_147px] w-[57px] h-[57px]"></div>
                </div>
                <div className="font-Pretendard text-[12px] text-center">폴더관리</div>
            </div>
            <SliderModal isModalOpen={isAddFolderModalOpen} onChangeModal={() => ModalHandler()} backgroundClose={false}>
                <SliderModalHeader title="폴더 관리" onChangeModal={() => ModalHandler()} closeWidth="60px" closeHeight="50px" />
                <div className="bg-white h-[40vh] overflow-y-auto flex-none">
                    <div onClick={CreateFolderModalHandler} className="flex flex-row bg-white p-4 gap-4">
                        <div className="bg-like-icon position bg-[position:-134px_0px] bg-[size:180px_147px] w-[20px] h-[20px]"></div>
                        <p className="font-Pretendard text-[16px] text-center">새폴더</p>
                    </div>
                    {folder.map((folderName, index) => (
                        <div key={index} className="flex flex-row bg-white justify-between p-4">
                            <div className="flex flex-row gap-4">
                                <div className="bg-like-icon position bg-[position:-134px_-90px] bg-[size:180px_147px] w-[20px] h-[20px]"></div>
                                <p className="font-Pretendard text-[16px] text-center">{folderName}</p>
                            </div>
                            <div className="w-[20%] flex justify-center">
                                <div className="bg-like-icon position bg-[position:-61px_-127px] bg-[size:180px_147px] w-[19px] h-[18px]"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 새 폴더 만들기 모달 */}
                <div
                    style={{
                        transform: isCreateFolderModalOpen ? "translateX(0%)" : "translateX(100%)",
                        transition: "transform 0.5s ease-in-out",
                    }}
                    className="fixed bottom-0 right-0 left-0 z-[300] bg-white h-[40vh]"
                >
                    <div className="bg-red-100">
                        <div className="bg-white flex justify-center pb-6 pt-8">
                            <span className="font-Pretendard text-[18px] text-center">새 폴더를 만들어보세요.</span>
                        </div>
                        <div>
                            <form className="bg-white flex flex-col justify-center items-center">
                                <div className="relative w-[90%] mb-7">
                                    <input
                                        type="text"
                                        maxLength={6}
                                        onChange={handleFolderNameChange}
                                        className="flex-none w-[100%] h-[50px] p-[15px] font-Pretendard text-[18px] border-2 rounded-[10px] border-gray-300  focus:border-gray-400"
                                        placeholder="폴더명을 입력해주세요."
                                    />
                                    <p className="absolute bottom-0 right-0 mr-[15px] mb-[15px] text-[#959595] text-[13px]">
                                        <span>{newFolderNameLength}</span>
                                        <span> / 6</span>
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 w-[90%] justify-center">
                                    <button
                                        type="button"
                                        className="flex-none w-[25%] h-[45px] rounded-full font-Pretendard text-[18px] border-[1px] bg-white border-[#e5e5e5]white"
                                        onClick={CreateFolderModalHandler}
                                    >
                                        이전
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            GetCreateFolder(e)
                                                .then(() => {
                                                    window.location.reload();
                                                })
                                                .catch((error) => {
                                                    console.error("Failed to create folder: ", error);
                                                });
                                        }}
                                        type="submit"
                                        className={`${
                                            newFolderNameLength > 0 ? "bg-primary-red text-white" : "bg-[#e5e5e5]"
                                        } flex-none w-[25%] h-[45px] rounded-full font-Pretendard text-[18px]`}
                                    >
                                        만들기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </SliderModal>
        </>
    );
};

export default LikeFolderManager;
