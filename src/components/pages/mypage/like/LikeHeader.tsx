import React from "react";

import LikeTotalFoler from "./LikeTotalFoler";
import LikeFolder from "./LikeFolder";
import LikeFolderAdd from "./LikeFolderAdd";
import LikeFolderManager from "./LikeFolderManager";

const LikeHeader = () => {
    const customFolder = ["test1", "test2", "test3", "test4", "test5", "test6"];

    return (
        <div className="h-[200px]">
            <div className="h-[120px] bg-white flex flex-row items-center gap-2 overflow-x-auto">
                <LikeTotalFoler />
                <LikeFolder />
                <LikeFolderAdd />
                <LikeFolderManager folder={customFolder} />
            </div>
            <div className="bg-[#f5f5f5] h-[50px] px-[15px] flex items-center">test</div>
        </div>
    );
};

export default LikeHeader;
