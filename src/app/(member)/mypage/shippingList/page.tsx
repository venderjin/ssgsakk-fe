import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ManageShippingList from "@/components/pages/mypage/shippingList/ManageShippingList";
import ManageShippingListTitle from "@/components/pages/mypage/shippingList/ManageShippingListTitle";
import Footer from "@/components/layouts/Footer";
import { ShippingInfoType } from "@/types/memberInfoType";

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

const getShippingData = async (shippingAddressSeq: number[], token: string) => {
  const data = shippingAddressSeq.map(async (shippingAddressSeq: number) => {
    const res = await fetch(
      `${process.env.BASE_URL}/shipping-addr/${shippingAddressSeq}`,
      {
        cache: "no-cache",
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
    if (res.status === 500) {
      alert(data.message);
    }
  });
  const result = await Promise.all(data);
  //기본배송지인 주소지를 상단에 정렬
  result.sort((a, b) => {
    if (a.defaultAddressCheck === 1) {
      return -1;
    }
    if (b.defaultAddressCheck === 1) {
      return 1;
    }
    return 0;
  });
  return result;
};

const ShippingList = async () => {
  const session = await getServerSession(options);
  const shippingAddressList = await fetchShippingList(
    session?.user?.token || ""
  );
  const shippingData: ShippingInfoType[] = await getShippingData(
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
