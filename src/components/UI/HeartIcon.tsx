"use client";
import React, { useState } from "react";
import RedHeart from "../images/RedHeart";
import Heart from "../images/Heart";

export default function HeartIcon({ handleLike }: { handleLike: () => void }) {
  const [isCheck, setIsCheck] = useState<Boolean>(false);

  const handler = () => {
    setIsCheck(!isCheck);
    handleLike();
  };

  return <div onClick={handler}>{isCheck ? <RedHeart /> : <Heart />}</div>;
}
