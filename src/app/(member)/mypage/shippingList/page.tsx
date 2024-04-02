import BackArrowHeader from "@/components/common/BackArrowHeader";
import ManageShippingList from "@/components/pages/mypage/shippingList/ManageShippingList";
import ManageShippingListTitle from "@/components/pages/mypage/shippingList/ManageShippingListTitle";

const ShippingList = () => {
    return (
        <>
            <BackArrowHeader title="배송지 관리" />
            <ManageShippingListTitle />
            <ManageShippingList />
        </>
    );
};

export default ShippingList;
