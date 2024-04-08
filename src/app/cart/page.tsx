import { useGetServerToken } from "@/actions/useGetServerToken";
import CartShippingInfo from "@/components/pages/cart/CartShippingInfo";
import CartProductList from "@/components/pages/cart/CartProductList";
import CartToolBar from "@/components/pages/cart/CartToolBar";
import NonMemberCard from "@/components/pages/cart/NonMemberCard";
import { ShippingInfoType } from "@/types/memberInfoType";
import TopHeaderIncludeIcon from "@/components/layouts/TopHeaderIncludeIcon";

const fetchShippingList = async (token: string) => {
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/shipping-addr/all`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
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

const getCartList = async (token: string) => {
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/carts/list`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (res.ok) {
    return data.result;
  }

  if (res.status === 500) {
    return data.msg;
  }
};

const Cart = async ({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) => {
  const token = await useGetServerToken();
  const isModalOpen = Boolean(searchParams.isModalOpen);
  const shippingData = await fetchShippingList(token);
  const cartItemList = await getCartList(token);

  return (
    <>
      <TopHeaderIncludeIcon title="장바구니" icon="home" fixed />
      {token ? (
        <CartShippingInfo shippingData={shippingData} modalOpen={isModalOpen} />
      ) : (
        <NonMemberCard />
      )}
      <CartProductList cartItemList={cartItemList} />
      <CartToolBar />
    </>
  );
};

export default Cart;
