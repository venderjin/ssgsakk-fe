import { getServerToken } from "@/actions/getServerToken";
import CartHeader from "@/components/pages/cart/CartHeader";
import CartShippingInfo from "@/components/pages/cart/CartShippingInfo";
import CartProductList from "@/components/pages/cart/CartProductList";
import CartToolBar from "@/components/pages/cart/CartToolBar";
import NonMemberCard from "@/components/pages/cart/NonMemberCard";
import { ShippingInfoType } from "@/types/memberInfoType";

const fetchShippingList = async (token: string) => {
  if (!token) return;
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
  if (!token) return;
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

const Cart = async ({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) => {
  const token = await getServerToken();
  const isModalOpen = Boolean(searchParams.isModalOpen);
  const shippingAddressList = await fetchShippingList(token);
  const shippingData: ShippingInfoType[] = (await getShippingData(
    shippingAddressList,
    token
  )) as ShippingInfoType[];

  return (
    <>
      <CartHeader />
      {token ? (
        <CartShippingInfo shippingData={shippingData} modalOpen={isModalOpen} />
      ) : (
        <NonMemberCard />
      )}
      <CartProductList />
      <CartToolBar />
    </>
  );
};

export default Cart;
