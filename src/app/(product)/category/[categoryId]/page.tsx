import React from "react";

export default function Page({ params }: { params: { categoryId: number } }) {
  return <div>여기는 카테고리{params.categoryId}페이지 입니다.</div>;
}
