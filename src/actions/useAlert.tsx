import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { alertState } from "@/recoil/atoms/alertState";

type AlertType = {
  isOpen: boolean;
  content: JSX.Element | string;
  type?: string;
  onConfirmHandler?: () => void;
};

export const useAlert = () => {
  const [alertDataState, setAlertDataState] = useRecoilState(alertState);

  const closeAlert = useCallback(
    () =>
      setAlertDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setAlertDataState]
  );

  const openAlert = useCallback(
    ({ content, type, onConfirmHandler }: AlertType) =>
      setAlertDataState({
        isOpen: true,
        content: content,
        type: type ? type : "alert",
        onConfirmHandler: onConfirmHandler ? onConfirmHandler : () => {},
      }),
    [setAlertDataState]
  );

  return { alertDataState, closeAlert, openAlert };
};
