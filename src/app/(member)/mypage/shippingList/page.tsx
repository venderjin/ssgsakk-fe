import BackArrowHeader from "@/components/common/BackArrowHeader";
import ManageShippingList from "@/components/pages/mypage/shippingList/ManageShippingList";
import ManageShippingListTitle from "@/components/pages/mypage/shippingList/ManageShippingListTitle";
import Footer from "@/components/layouts/Footer";

const ShippingList = () => {
    return (
        <>
            <BackArrowHeader title="배송지 관리" />
            <ManageShippingListTitle />
            <ManageShippingList />
            <Footer />
        </>
    );
};

export default ShippingList;
