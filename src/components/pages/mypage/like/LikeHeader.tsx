import React from "react";

import LikeTotalFoler from "./LikeTotalFoler";
import LikeFolderAdd from "./LikeFolderAdd";
import LikeFolderManager from "./LikeFolderManager";

const LikeHeader = () => {
    return (
        <>
            <div className="h-[100px] bg-red-100 flex flex-row items-center px-3 gap-2 overflow-x-auto">
                <LikeTotalFoler />
                <LikeFolderAdd />
                <LikeFolderManager />
            </div>
        </>
    );
};

export default LikeHeader;
