import { atom } from "recoil";

type ModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  fixed?: boolean;
};

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
    fixed: true,
  },
});
