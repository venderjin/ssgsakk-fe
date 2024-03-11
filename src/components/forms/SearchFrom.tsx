import React from "react";

const SearchFrom = () => {
    return (
        <form className="relative w-full">
            <input type="text" className="h-[40px] w-full rounded-full bg-[#F5F5F5]"></input>
            <div className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                    <path
                        fill="#000"
                        fill-rule="evenodd"
                        d="M7.6 14.8c0 3.96 3.24 7.2 7.2 7.2s7.2-3.24 7.2-7.2-3.24-7.2-7.2-7.2-7.2 3.24-7.2 7.2Zm1.2 0c0-3.36 2.64-6 6-6s6 2.64 6 6-2.64 6-6 6-6-2.64-6-6Z"
                        clip-rule="evenodd"
                    />
                    <path fill="#000" d="m19.019 19.856.848-.848 5.516 5.515-.849.849-5.515-5.516Z" />
                </svg>
            </div>
        </form>
    );
};

export default SearchFrom;
