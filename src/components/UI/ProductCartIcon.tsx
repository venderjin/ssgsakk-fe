"use client";
import Cart from "@/components/images/Cart";
import { useGetClientToken } from "@/actions/useGetClientToken";
import { AddCart } from "@/actions/cart";
import { useRouter } from "next/navigation";
import { cartState } from "@/recoil/atoms/cartState";
import { useRecoilState } from "recoil";
import { OptionResponse } from "@/types/optionType";

const ProductCartIcon = ({
  productSeq,
  optionData,
}: {
  productSeq: number;
  optionData: OptionResponse;
}) => {
  const minimumStock = 5;
  const [cartList, setCartList] = useRecoilState(cartState);
  const router = useRouter();
  const token = useGetClientToken();

  const disable =
    !optionData.depthLevel && optionData?.options?.[0].stock <= minimumStock;

  const updateCartCount = async () => {
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
      setCartList(data.result);
    }

    if (res.status === 500) {
      console.log(data.msg);
    }
  };

  //해당 상품에 옵션이 존재하는지 확인한다.
  const clickHandler = async () => {
    if (!token) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }

    //옵션이 존재하면 옵션 선택 페이지로 이동한다.
    if (optionData.depthLevel) {
      if (
        confirm(
          "해당 상품에 옵션이 존재합니다. 옵션 선택 페이지로 이동하시겠습니까?"
        )
      )
        router.push(`/products/${productSeq}`);
    }
    //옵션이 존재하지 않으면 장바구니에 상품을 담는다.
    else {
      const response = await AddCart(
        productSeq,
        optionData.options[0].optionAndStockSeq
      );
      alert(response);
      updateCartCount();
    }
  };

  return (
    <button onClick={clickHandler} disabled={disable}>
      <Cart width={20} height={20} disable={disable} />
    </button>
  );
};

export default ProductCartIcon;
