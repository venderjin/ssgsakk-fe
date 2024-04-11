const LikeEmpty = ({ type }: { type: string }) => {
    if (type === "product") {
        return (
            <div className="h-[30vh] flex justify-center items-center">
                <span className="font-Pretendard text-gray-400 text-[14px] text-center">
                    찜한 상품이 없어요! <br />
                    상품을 찜해보세요!
                </span>
            </div>
        );
    } else if (type === "category") {
        return (
            <div className="h-[30vh] flex justify-center items-center">
                <span className="font-Pretendard text-gray-400 text-[14px] text-center">
                    찜한 폴더가 비어있어요! <br />
                    폴더에 원하는 항목을 추가해보세요!
                </span>
            </div>
        );
    }
};

export default LikeEmpty;
