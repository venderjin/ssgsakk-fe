import { atom } from "recoil";

type AlertType = {
  isOpen: boolean;
  content: JSX.Element | string;
  type?: string;
  onConfirmHandler?: () => void;
};

export const alertState = atom<AlertType>({
  key: "alertState",
  default: {
    isOpen: false,
    content: "",
    type: "alert",
  },
});
