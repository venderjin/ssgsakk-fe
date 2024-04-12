import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isReviewAllModalOpen = atom<boolean>({
  key: "isReviewAllModalOpen",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isPhotoReviewAllModalOpen = atom<boolean>({
  key: "isPhotoReviewAllModalOpen",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
