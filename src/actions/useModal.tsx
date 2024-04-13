import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { modalState } from "@/recoil/atoms/modalState";

type OpenModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  fixed?: boolean;
};

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState]
  );

  const openModal = useCallback(
    ({ title, content, fixed }: OpenModalType) =>
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        fixed: fixed ? fixed : false,
      }),
    [setModalDataState]
  );

  return { modalDataState, closeModal, openModal };
};
