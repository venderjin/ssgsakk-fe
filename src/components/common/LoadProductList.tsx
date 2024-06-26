const LoadProductList = () => {
    return (
        <div className="flex flex-row h-[auto] px-3 my-5 w-full flex-wrap justify-between">
            <div className="basis-[48%] animate-pulse flex flex-col justify-start items-start">
                <div className="bg-gray-200 h-[200px] w-full"></div>
                <div className="bg-gray-200 h-[20px] w-full mt-4"></div>
                <div className="bg-gray-200 h-[20px] w-4/5 mt-4"></div>
                <div className="bg-gray-200 h-[20px] w-1/3 mt-4"></div>
            </div>
            <div className="basis-[48%] animate-pulse flex flex-col justify-start items-start">
                <div className="bg-gray-200 h-[200px] w-full"></div>
                <div className="bg-gray-200 h-[20px] w-full mt-4"></div>
                <div className="bg-gray-200 h-[20px] w-4/5 mt-4"></div>
                <div className="bg-gray-200 h-[20px] w-1/3 mt-4"></div>
            </div>
        </div>
    );
};

export default LoadProductList;
