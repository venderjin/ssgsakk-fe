import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { OrderInfo, OrderProductInfo } from "../../types/orderType";

const { persistAtom } = recoilPersist();

//비회원 주문정보 ---------------------------------------------------
// 주문자명, 주문자 전화번호, 주문자 이메일,
//배송 요청사항
//배송지 우편번호, 배송지 도로명주소, 배송지 지번주소, 배송지 상세주소
export const nonMemberOrderState = atom<OrderInfo>({
    key: "nonMemberOrderState",
    default: {
        purchaser: "",
        purchaserPhoneNum: "",
        purchaseEmail: "",
        recipient: "",
        recipientPhoneNum: "",
        recipientEmail: "",
        purchaseZipcode: "",
        purchaseRoadAddress: "",
        purchaseJibunAddress: "",
        purchaseDetailAddress: "",
        deliverymessage: "부재 시 경비실에 맡겨주세요.",
    },
    effects_UNSTABLE: [persistAtom],
});

//회원 주문정보 ---------------------------------------------------
// 주문자명, 주문자 전화번호, 주문자 이메일,
// 수령자명, 수령자 전화번호, 수령자 이메일,
// 배송 요청사항
// 배송지 우편번호, 배송지 도로명주소, 배송지 지번주소, 배송지 상세주소
export const memberOrderState = atom<OrderInfo>({
    key: "memberOrderState",
    default: {
        purchaser: "",
        purchaserPhoneNum: "",
        purchaseEmail: "",
        recipient: "",
        recipientPhoneNum: "",
        recipientEmail: "",
        purchaseZipcode: "",
        purchaseRoadAddress: "",
        purchaseJibunAddress: "",
        purchaseDetailAddress: "",
        deliverymessage: "부재 시 경비실에 맡겨주세요.",
    },
    effects_UNSTABLE: [persistAtom],
});

//주문상품 정보List  ------------------------------------------------
// 상품Seq, 상품명, 상품벤더, 상품옵션Seq, 상품옵션명, 상품수량
// 상품 할인금액, 상품 원가격, 상품이미지 썸네일, 상품 배송타입,
export const orderProductListState = atom<OrderProductInfo[]>({
    key: "orderProductListState",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

//배송메모 ---------------------------------------------------
export const shippingMemoState = atom<boolean>({
    key: "shippingMemoState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});
