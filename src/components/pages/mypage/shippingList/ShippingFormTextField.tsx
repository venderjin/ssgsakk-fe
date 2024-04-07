import { Path, UseFormRegister } from "react-hook-form";
import ErrorMessage from "@/components/UI/ErrorMessage";

interface ShippingFormData {
  addressNickname: string;
  receiverName: string;
  receiverMobileNum: string;
  zipCode: string;
}

interface Props {
  text: string;
  name: Path<ShippingFormData>;
  register: UseFormRegister<ShippingFormData>;
  errorMsg?: string;
  placeholder?: string;
  openAddressModal?: (open: boolean) => void;
}

const ShippingFormTextField = ({
  text,
  name,
  register,
  errorMsg,
  placeholder,
  openAddressModal,
}: Props) => {
  return (
    <div className="relative pl-[90px] pt-[11px] pb-[10px] text-[#666] text-[13px] w-full flex items-center bg-break-line bg-repeat-x bg-[length:2px_1px]">
      <span className="inline-block absolute left-0 font-bold text-[#222]">
        <label htmlFor="addressName">{text}</label>
      </span>
      <div
        className={`relative w-full ${name === "zipCode" ? "pr-[66px]" : ""}`}
      >
        <div className="relative border border-[#ccc] rounded-[2px] py-[7px] px-[8px] w-full">
          <input
            readOnly={name === "zipCode"}
            className="h-[17px] w-full text-[12px] text-[#767676]"
            type="text"
            placeholder={placeholder}
            maxLength={20}
            {...register(name)}
          />
        </div>
        {name === "zipCode" && (
          <button
            onClick={() => openAddressModal && openAddressModal(true)}
            type="button"
            className="absolute right-0 top-0 h-full w-[57px] bg-[#f7f7f7] border border-[#f7bcc9] rounded-[2px] text-primary-red font-semibold text-center"
          >
            우편번호
          </button>
        )}
        {errorMsg && <ErrorMessage error={errorMsg} />}
      </div>
    </div>
  );
};

export default ShippingFormTextField;
