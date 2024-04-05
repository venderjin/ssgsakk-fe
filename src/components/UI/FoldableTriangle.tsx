"use client";
import React, { useState } from "react";

import FlipTriangle from "@/components/images/FlipTriangle";

const FoldableTriangle = () => {
    const [fold, setFold] = useState<boolean>(false);
    const [rotate, setRotate] = useState<string>("0");

    const foldHandler = () => {
        setFold(!fold);
        setRotate(fold ? "0" : "180");
    };

    return (
        <div onClick={foldHandler} className="w-[10%] flex justify-center">
            <FlipTriangle width={20} height={20} rotate={rotate} />
        </div>
    );
};

export default FoldableTriangle;
