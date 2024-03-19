"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

async function getProductData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
}

const EventProductList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProductData();
            setData(result.products);
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            <div>EventProductList</div>
            {/* <div>
                {data &&
                    data.map((item: any) => (
                        <div key={item.id} className="border-2 px-3 bg-red-200">
                            <div className="w-full h-[1000px] overflow-hidden bg-green-200 item-center">
                                <Image src={item.thumbnail} alt={item.title} width={200} height={200} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className="flex flex-row gap-1">
                                <p className="font-Pretendard text-[16px] font-bold">{item.brand}</p>
                                <p className="font-Pretendard text-[16px]">{item.title}</p>
                            </div>
                            <p className="font-Pretendard text-[16px] whitespace-nowarp">{item.description}</p>
                            <p className="font-Pretendard text-[16px] font-bold">{item.price}원~</p>
                        </div>
                    ))}
            </div> */}
        </div>
    );
};

export default EventProductList;
