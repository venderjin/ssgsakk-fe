import Image from "next/image";
import Link from "next/link";
import { useGetServerToken } from "@/actions/useGetServerToken";

const getCartItemCount = async (token: string) => {
  if (!token) return 0;
  const res = await fetch(`${process.env.BASE_URL}/carts/count`, {
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
  console.log(data);
};

const CartIcon = async () => {
  const token = await useGetServerToken();
  const cartCount = await getCartItemCount(token);

  return (
    <>
      <Link href={"/cart"}>
        <Image
          src="/images/etc/cart.svg"
          alt="cart-icon"
          width={24}
          height={24}
          className="ml-[12px]"
        />
        {cartCount > 0 && (
          <div className="absolute top-0 right-[3px]">
            <p className="bg-primary-red text-center text-[10px] text-[#fff] rounded-[50%] min-w-[16px] transform translate-x-1/2">
              {cartCount}
            </p>
          </div>
        )}
      </Link>
    </>
  );
};

export default CartIcon;
