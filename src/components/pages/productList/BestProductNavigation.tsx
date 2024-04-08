"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RightArrow from "@/components/images/RightArrow";
import SliderModal from "@/components/common/SliderModal";
import ModalSlider from "@/components/images/ModalSlider";
import SliderModalHeader from "@/components/common/SliderModalHeader";

import { deliveryData, categoryData } from "@/libs/bestProductNavigationData";

interface BestProductNavigationProps {
  deliveryType: string | undefined;
  categorySeq: number | undefined;
}

const BestProductNavigation = ({
  deliveryType,
  categorySeq,
}: BestProductNavigationProps) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    categorySeq
  );
  const [selectedDelivery, setSelectedDelivery] = useState<string | undefined>(
    deliveryType
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeDeliveryRef = useRef<HTMLElement | null>(null);
  const activeCategoryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeDeliveryRef.current) {
      activeDeliveryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    if (activeCategoryRef.current) {
      activeCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, []);

  const ModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeliveryClick = (deliveryType: string, route: string) => {
    if (selectedDelivery === deliveryType) {
      setSelectedDelivery(undefined);
      router.push("/productList/bestProductList");
    } else {
      setSelectedDelivery(deliveryType);
      const queryString = new URLSearchParams();
      if (selectedCategory !== undefined) {
        if (selectedCategory === 0) {
          queryString.set("category", "");
        } else if (selectedCategory > 0) {
          queryString.set("category", selectedCategory.toString());
        }
      }
      queryString.set("delivery", deliveryType);
      router.push(`/productList/bestProductList?${queryString.toString()}`);
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    const queryString = new URLSearchParams();
    queryString.set("delivery", selectedDelivery || "");
    if (categoryId === 0) {
      queryString.set("category", "");
    } else if (categoryId > 0) {
      queryString.set("category", categoryId.toString());
    }
    queryString.set("category", categoryId.toString());
    router.push(`/productList/bestProductList?${queryString.toString()}`);
  };

  return (
    <>
      <div className="py-2 bg-white">
        <div className="flex flex-row h-[40px] items-center overflow-x-auto px-3">
          {deliveryData.map((data) => (
            <div
              ref={
                selectedDelivery === data.deliveryType
                  ? (activeDeliveryRef as React.RefObject<HTMLDivElement>)
                  : null
              }
              key={data.id}
              onClick={() => {
                handleDeliveryClick(data.deliveryType, data.route);
              }}
              className="flex-none mr-3"
              style={{ width: "auto", height: "30px" }}
            >
              <Image
                src={
                  selectedDelivery === data.deliveryType
                    ? data.checkedImgpath
                    : data.unCheckedImgpath
                }
                alt={data.deliveryType}
                width={80}
                height={30}
                style={{ width: "auto", height: "30px" }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-row h-[40px] items-center overflow-x-auto px-3">
            {categoryData.map((data) => (
              <button
                ref={
                  selectedCategory === data.id
                    ? (activeCategoryRef as React.RefObject<HTMLButtonElement>)
                    : null
                }
                key={data.id}
                onClick={() => handleCategoryClick(data.id)}
                className={`py-2 px-3 whitespace-nowrap mr-1 font-Pretendard text-[13px]
                                ${
                                  selectedCategory === data.id
                                    ? "bg-[#222222] text-white"
                                    : "bg-white text-black border-2 border-[#E5E5E5]"
                                }
                                `}
              >
                {data.title}
              </button>
            ))}
          </div>
          <div
            className="flex-3 flex"
            style={{
              boxShadow: " -10px 0 8px 0px white",
              backgroundColor: "rgba(0,0,255,0)",
            }}
          >
            <button
              onClick={() => ModalHandler()}
              className="bg-white border-2 border-[#E5E5E5] flex-1 justify-center items-center py-2 px-3  font-Pretendard text-[13px]"
            >
              <RightArrow rotate={"90"} />
            </button>
          </div>
        </div>
      </div>
      <SliderModal
        isModalOpen={isModalOpen}
        onChangeModal={() => ModalHandler()}
        backgroundClose={true}
      >
        <ModalSlider />
        <SliderModalHeader
          title="전체 카테고리"
          onChangeModal={() => ModalHandler()}
        />
        <div className="flex flex-col gap-2 p-3 h-[70vh] overflow-y-auto">
          {categoryData.map((item) => (
            <label
              key={item.id}
              className={`mx-3 py-2 flex justify-start items-center ${
                selectedCategory === item.id ? "font-bold" : ""
              }`}
            >
              <input
                type="radio"
                value={item.title}
                checked={selectedCategory === item.id}
                onChange={() => setSelectedCategory(item.id)}
                className="mr-3 h-6 w-6  accent-[#ff5452]"
                onClick={() => handleCategoryClick(item.id)}
              />
              <span className="text-black font-Pretendard text-[16px]">
                {item.title}
              </span>
            </label>
          ))}
        </div>
      </SliderModal>
    </>
  );
};

export default BestProductNavigation;
