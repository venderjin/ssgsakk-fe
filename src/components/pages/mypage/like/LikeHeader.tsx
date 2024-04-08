import React from "react";

import LikeTotalFoler from "./LikeTotalFoler";
import LikeFolder from "./LikeFolder";
import LikeFolderAdd from "./LikeFolderAdd";
import LikeFolderManager from "./LikeFolderManager";

const LikeHeader = () => {
    return (
        <>
            <div className="h-[100px] bg-red-100 flex flex-row items-center gap-2 overflow-x-auto">
                <LikeTotalFoler />
                <LikeFolder />
                <LikeFolderAdd />
                <LikeFolderManager />
            </div>
        </>
    );
};

export default LikeHeader;
