import React from "react";
import Image from "next/image";

const UniverseBanner = () => {
  return (
    <div>
      <div className="w-full h-[94px] relative  my-2">
        <Image
          src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png&w=750"
          alt="유니버스 클럽 무료 체험"
          priority
          fill
        />
      </div>
    </div>
  );
};

export default UniverseBanner;
