import React from "react";

import Image from "next/image";

const SearchFrom = () => {
    return (
        <form className="relative w-1/2">
            <input type="text" className="h-[40px] w-full rounded-full bg-[#F5F5F5] "></input>
            <div className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <Image src="/images/home/searchLogo.png" alt="Search" width={24} height={24} />
            </div>
        </form>
    );
};

export default SearchFrom;
