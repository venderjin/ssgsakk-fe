import BestProductResult from "@/components/pages/productList/BestProductResult";

interface BestProduct {
    productSeq: number;
}

async function getBestProductData() {
    const res = await fetch(`${process.env.BASE_URL}/products/best`);
    const data = await res.json();
    return data.result.slice(0, 10);
}

const HomeBestProductList = async () => {
    const bestProductList: BestProduct[] = await getBestProductData();
    return (
        <>
            <BestProductResult bestProductSeqList={bestProductList} />
        </>
    );
};

export default HomeBestProductList;
