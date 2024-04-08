// "use client";
// import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeartIcon from "@/components/UI/HeartIcon";
import Cart from "@/components/images/Cart";

async function getProductData() {
    const res = await fetch(`${process.env.BASE_URL}/events`);
    const data = await res.json();
    // console.log(data.result);
    return data.result;
}

interface EventProductListProps {
    visiableProductList?: number;
}

interface EventProductList {
    prodcutSeq: number;
}
[];
const EventProductList = async ({ visiableProductList }: EventProductListProps) => {
    // console.log(visiableProductList);
    const eventProductList = await getProductData();
    // console.log(eventProductList);

    return (
        <div className="bg-white">
            {/* {data &&
        Array.isArray(data) &&
        data.map((item: any) => (
          <div key={item.id} className="px-3 mb-3">
            <div
              style={{ width: "100%", height: "240px", position: "relative" }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                // width={200}
                // height={200}
                // style={{ width: "100%", height: "auto", objectFit: "cover" }}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>
            <div className="flex flex-row">
              <div className=" flex-none my-2 w-4/5 ">
                <div className="flex flex-row gap-1">
                  <p className="font-Pretendard text-[16px] font-bold">
                    {item.brand}
                  </p>
                  <p className="font-Pretendard text-[16px]">{item.title}</p>
                </div>
                <p className="font-Pretendard text-[16px] whitespace-nowarp">
                  {item.description}
                </p>
                <p className="font-Pretendard text-[16px] font-bold">
                  {item.price.toLocaleString()}원~
                </p>
              </div>
              <div className="my-2 w-2/3 flex flex-row gap-2 justify-end pr-2 items-start ">
                <HeartIcon />
                <Cart />
              </div>
            </div>
          </div>
        ))} */}
        </div>
    );
};

export default EventProductList;
