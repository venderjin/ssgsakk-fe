import { useGetServerToken } from "@/actions/useGetServerToken";
import CartShippingInfo from "@/components/pages/cart/CartShippingInfo";
import CartProductList from "@/components/pages/cart/CartProductList";
import CartToolBar from "@/components/pages/cart/CartToolBar";
import NonMemberCard from "@/components/pages/cart/NonMemberCard";
import { ShippingInfoType } from "@/types/memberInfoType";
import TopHeaderIncludeIcon from "@/components/layouts/TopHeaderIncludeIcon";
import CartTotalCard from "@/components/pages/cart/CartTotalCard";
import { revalidateTag } from "next/cache";

const Cart = async ({ searchParams }: { searchParams: { [key: string]: number } }) => {
    const token = await useGetServerToken();
    const isModalOpen = Boolean(searchParams.isModalOpen);
    const shippingData = await fetchShippingList(token);
    const cartItemList = await getCartList(token);

    return (
        <>
            <TopHeaderIncludeIcon title="장바구니" icon="home" fixed />
            {token ? (
                <>
                    <CartShippingInfo shippingData={shippingData} modalOpen={isModalOpen} />
                    <CartProductList
                        cartItemList={cartItemList}
                        updateQuantity={useUpdateQunatity}
                        deleteCartItem={useDeleteCartItem}
                        fixCartItem={useFixCartItem}
                        checkCartItem={useCheckCartItem}
                        checkAllCartItem={useCheckAllCartItem}
                    />
                    {cartItemList.length > 0 && (
                        <>
                            <CartTotalCard />
                            <CartToolBar />
                        </>
                    )}
                </>
            ) : (
                <NonMemberCard />
            )}
        </>
    );
};

const useCheckAllCartItem = async (check: boolean) => {
    "use server";
    const token = await useGetServerToken();
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/allcheck?checkbox=${Number(check)}`, {
        method: "PUT",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
        revalidateTag("cart");
    } else console.log(data);
};

const useCheckCartItem = async (cartSeq: number, check: boolean) => {
    "use server";
    const token = await useGetServerToken();
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/${cartSeq}/checkbox?checkbox=${Number(check)}`, {
        method: "PUT",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
        revalidateTag("cart");
    } else console.log(data);
};

const useFixCartItem = async (cartSeq: number, fix: boolean) => {
    "use server";
    const token = await useGetServerToken();
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/${cartSeq}/pin?fix=${Number(fix)}`, {
        method: "PUT",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) revalidateTag("cart");
    else console.log(data);
};

const useDeleteCartItem = async (cartSeq: number) => {
    "use server";
    const token = await useGetServerToken();
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/${cartSeq}`, {
        method: "DELETE",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) revalidateTag("cart");
    else console.log(data);
};

const useUpdateQunatity = async (cartSeq: number, quantity: number) => {
    "use server";
    const token = await useGetServerToken();
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/${cartSeq}/quantity?quantity=${quantity}`, {
        method: "PUT",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    const data = await res.json();

    if (res.ok) revalidateTag("cart");
    else console.log(data);
};

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
        next: { tags: ["cart"] },
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

export default Cart;
