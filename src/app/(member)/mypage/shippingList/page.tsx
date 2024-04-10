import BackArrowHeader from "@/components/common/BackArrowHeader";
import ManageShippingList from "@/components/pages/mypage/shippingList/ManageShippingList";
import ManageShippingListTitle from "@/components/pages/mypage/shippingList/ManageShippingListTitle";
import Footer from "@/components/layouts/Footer";
import { ShippingInfoType } from "@/types/memberInfoType";
import { useGetServerToken } from "@/actions/useGetServerToken";

const fetchShippingList = async (token: string) => {
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/shipping-addr/all`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    next: { tags: ["address"] },
    cache: "no-store",
  });

  const data = await res.json();
  if (res.ok) {
    const result = data.result;
    //기본배송지인 주소지를 상단에 정렬
    result.sort((a: ShippingInfoType, b: ShippingInfoType) => {
      if (a.defaultAddressCheck === 1) {
        return -1;
      }
      if (b.defaultAddressCheck === 1) {
        return 1;
      }
      return 0;
    });

    return result;
  }

  if (res.status === 500) {
    return data.message;
  }
};

const ShippingList = async () => {
  const token = await useGetServerToken();
  const shippingData = await fetchShippingList(token);

  return (
    <>
      <BackArrowHeader title="배송지 관리" />
      <ManageShippingListTitle />
      <ManageShippingList shippingData={shippingData} />
      <Footer />
    </>
  );
};

export default ShippingList;
