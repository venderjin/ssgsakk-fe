import TopHeader from "@/components/layouts/TopHeader";
import Footer from "@/components/layouts/Footer";
import LoadProductList from "@/components/common/LoadProductList";

const loading = () => {
    return (
        <>
            <TopHeader />

            <div className="bg-gray-100 w-full h-[50px] flex flex-row items-center px-[16px] justify-between gap-2"></div>
            <LoadProductList />
            <LoadProductList />
            <Footer />
        </>
    );
};

export default loading;
