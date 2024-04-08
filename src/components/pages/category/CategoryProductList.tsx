import DataNotFound from "@/components/common/DataNotFound";
import ProductListCard from "@/components/pages/productList/ProductListCard";

interface CategoryProductListProps {
    productSeq: number;
}

const CategoryProductList = async ({ categorySeqList }: { categorySeqList: CategoryProductListProps[] }) => {
    return (
        <>
            {categorySeqList.length === 0 ? (
                <DataNotFound />
            ) : (
                <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
                    {categorySeqList.map((item: CategoryProductListProps, idx: number) => (
                        <div key={idx} className="basis-[48%]">
                            <ProductListCard productSeq={item.productSeq} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default CategoryProductList;
