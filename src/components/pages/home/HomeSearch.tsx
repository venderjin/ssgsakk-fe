import React, { Suspense } from "react";
import SearchFrom from "@/components/forms/SearchFrom";

const HomeSearch = () => {
    return (
        <>
            <Suspense>
                <SearchFrom />
            </Suspense>
        </>
    );
};

export default HomeSearch;
