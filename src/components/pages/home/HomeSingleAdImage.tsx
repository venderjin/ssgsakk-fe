import React from "react";
import Image from "next/image";

interface HomeSingleAdImageProps {
    imgPath: string;
    title?: string;
}

const HomeSingleAdImage: React.FC<HomeSingleAdImageProps> = ({ imgPath, title }) => {
    return (
        <div className="">
            <Image src={imgPath} alt={title ? title : "single-ad"} width={750} height={0} priority={true} className="p-3" />
        </div>
    );
};

export default HomeSingleAdImage;
