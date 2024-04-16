"use client";
import React, { useState } from "react";

import SliderModalHeader from "@/components/common/SliderModalHeader";
import SliderModal from "@/components/common/SliderModal";
import { useGetClientToken } from "@/actions/useGetClientToken";

const LikeFolderAdd = () => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);
  const [newFolderNameLength, setNewFolderNameLength] = useState<number>(0);
  const [newFolderName, setNewFolderName] = useState<string>("");
  const token = useGetClientToken();

  const ModalHandler = () => {
    setIsAddFolderModalOpen(!isAddFolderModalOpen);
  };

  const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolderNameLength(e.target.value.length);
    setNewFolderName(e.target.value);
  };

  const GetCreateFolder = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.BASE_URL}/likes/folder/add?folder-name=${newFolderName}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  };

  return (
    <>
      <div onClick={ModalHandler} className="flex-none w-[57px] mx-2">
        <div className="rounded-full bg-white border-[1px] border-gray-300 w-[57px] h-[57px] flex justify-center items-center">
          <div className="bg-like-icon position bg-[position:0px_0px] bg-[size:180px_147px] w-[57px] h-[57px]"></div>
        </div>
        <div className="font-Pretendard text-[12px] text-center">새폴더</div>
      </div>
      <SliderModal
        isModalOpen={isAddFolderModalOpen}
        onChangeModal={() => ModalHandler()}
        backgroundClose={false}
      >
        <SliderModalHeader
          title="새 폴더"
          onChangeModal={() => ModalHandler()}
          closeWidth="60px"
          closeHeight="50px"
        />
        <div className="bg-white h-[40vh]">
          <div className="bg-white flex justify-center pb-6 pt-8">
            <span className="font-Pretendard text-[18px] text-center">
              폴더를 추가하여 좋아요를
              <br />
              내맘대로 관리해보세요!
            </span>
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
                  newFolderNameLength > 0
                    ? "bg-primary-red text-white"
                    : "bg-[#e5e5e5]"
                } w-[25%] h-[45px] rounded-full font-Pretendard text-[18px]`}
              >
                만들기
              </button>
            </form>
          </div>
        </div>
      </SliderModal>
    </>
  );
};

export default LikeFolderAdd;
