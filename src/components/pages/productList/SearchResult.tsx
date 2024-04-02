import DataNotFound from "@/components/common/DataNotFound";
import ProductListCard from "@/components/pages/productList/ProductListCard";

interface ProductSeq {
    productSeq: number;
}

const SearchResult = ({ productSeqList }: { productSeqList: ProductSeq[] }) => {
    return (
        <>
            {productSeqList.length === 0 ? (
                <DataNotFound />
            ) : (
                <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
                    {productSeqList.map((item: ProductSeq, idx: number) => (
                        <div key={idx} className="basis-[48%]">
                            <ProductListCard productSeq={item.productSeq} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchResult;
