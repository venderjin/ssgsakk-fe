import React, { Suspense } from "react";

import SearchResult from "@/components/pages/productList/SearchResult";

const searchProductListpage = () => {
    return (
        <>
            <Suspense>
                <SearchResult />
            </Suspense>
        </>
    );
};

export default searchProductListpage;
