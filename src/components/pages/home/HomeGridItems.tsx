import React from "react";
import Image from "next/image";

const HomeGridItems = () => {
    const imgPath = "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509053385538505647850_845.png&w=128&h=128";

    return (
        <div className="bg-yellow-100">
            <div className="w-full h-[280px] flex-nowrap">
                <div className="bg-teal-200 h-2/5 flex-nowrap flex flex-row overflow-x-auto">
                    <Image src={imgPath} alt="HomeGridItems Upper 1" width={200} height={200} />

                    <h2>HomeGridItems Upper 1</h2>
                    <h2>HomeGridItems Upper 2</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                    <h2>HomeGridItems Upper</h2>
                </div>
                <div className="bg-teal-300 h-3/5 flex-nowrap flex flex-row overflow-x-auto">
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                    <h2>HomeGridItems Lower</h2>
                </div>
            </div>
        </div>
    );
};

export default HomeGridItems;
