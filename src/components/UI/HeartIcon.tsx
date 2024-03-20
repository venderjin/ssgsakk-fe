"use client";
import React, { useState } from "react";
import RedHeart from "../images/RedHeart";
import Heart from "../images/Heart";

interface Props {
  handleLike: () => void;
  height?: number;
  width?: number;
}

export default function HeartIcon({ handleLike, height, width }: Props) {
  const [isCheck, setIsCheck] = useState<Boolean>(false);

  const handler = () => {
    setIsCheck(!isCheck);
    handleLike();
  };

  return (
    <div onClick={handler}>
      {isCheck ? (
        <RedHeart height={height} width={width} />
      ) : (
        <Heart height={height} width={width} />
      )}
    </div>
  );
}
