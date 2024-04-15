import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { WritableReviewType } from "@/types/reviewType";

const { persistAtom } = recoilPersist();

//작성 가능한 리뷰 정보
export const writableReviewState = atom<WritableReviewType>({
  key: "writableReviewState",
  default: {
    purchaseSeq: 0,
    purchaseProductSeq: 0,
    purchaseCode: "",
    purchaseDate: "",
    productSeq: 0,
    purchaseProductName: "",
    purchaseProductOption: "",
    productContentsVo: {
      contentUrl: "",
      priority: 0,
      contentDescription: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});
