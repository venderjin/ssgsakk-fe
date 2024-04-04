import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ManageShippingList from "@/components/pages/mypage/shippingList/ManageShippingList";
import ManageShippingListTitle from "@/components/pages/mypage/shippingList/ManageShippingListTitle";
import Footer from "@/components/layouts/Footer";

export interface ShippingInfo {
  shippingAddressId: number;
  addressNickname: string;
  zipCode: string;
  roadAddress: string;
  jibunAddress: string;
  detailAddress: string;
  defaultAddressCheck: number;
}

const fetchShippingList = async (token: string) => {
  const res = await fetch(`${process.env.BASE_URL}/shipping-addr/list`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (res.ok) {
    return data.result.shippingAddressList;
  }

  if (res.status === 500) {
    return data.message;
  }
};

const getShippingData = async (shippingIds: number[], token: string) => {
  const data = shippingIds.map(async (shippingId: number) => {
    const res = await fetch(
      `${process.env.BASE_URL}/shipping-addr/${shippingId}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    if (res.ok) {
      return data.result;
    }
  });
  const result = await Promise.all(data);
  return result;
};

const ShippingList = async () => {
  const session = await getServerSession(options);

  const shippingAddressList = await fetchShippingList(
    session?.user?.token || ""
  );
  const shippingData: ShippingInfo[] = await getShippingData(
    shippingAddressList,
    session?.user?.token || ""
  );

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
