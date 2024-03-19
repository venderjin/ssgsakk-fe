"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeartIcon from "@/components/UI/HeartIcon";
import Cart from "@/components/images/Cart";

async function getProductData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
}

interface EventProductListProps {
    visiableProductList: number;
}

const EventProductList: React.FC<EventProductListProps> = ({ visiableProductList }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProductData();
            setData(result.products.slice(0, visiableProductList));
        };
        fetchData();
    }, []);

    const handleLike = (id: any) => {
        console.log("like");
        console.log(id);
    };

    // console.log(data);

    return (
        <div>
            <div>
                {data &&
                    Array.isArray(data) &&
                    data.map((item: any) => (
                        <div key={item.id} className="border-2 px-3 ">
                            <div style={{ width: "100%", height: "240px", position: "relative" }}>
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
                                <div className=" flex-none my-2 w-2/3 ">
                                    <div className="flex flex-row gap-1">
                                        <p className="font-Pretendard text-[16px] font-bold">{item.brand}</p>
                                        <p className="font-Pretendard text-[16px]">{item.title}</p>
                                    </div>
                                    <p className="font-Pretendard text-[16px] whitespace-nowarp">{item.description}</p>
                                    <p className="font-Pretendard text-[16px] font-bold">{item.price.toLocaleString()}원~</p>
                                </div>
                                <div className="my-2 w-2/3 flex flex-row gap-2 justify-end pr-2">
                                    <HeartIcon handleLike={() => handleLike(item.id)} />
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default EventProductList;
