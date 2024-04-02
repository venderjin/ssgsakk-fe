"use client";
import React, { useState } from "react";
import RedHeart from "../images/RedHeart";
import Heart from "../images/Heart";

interface Props {
  productSeq?: number;
  height?: number;
  width?: number;
}

export default function HeartIcon({ productSeq, height, width }: Props) {
  const [isCheck, setIsCheck] = useState<Boolean>(false);

  // const handler = () => {
  //     setIsCheck(!isCheck);
  //     handleLike();
  // };

  return (
    <div>
      {isCheck ? (
        <RedHeart height={height} width={width} />
      ) : (
        <Heart height={height} width={width} />
      )}
    </div>
  );
}
