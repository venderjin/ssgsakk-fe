import { Path, UseFormRegister } from "react-hook-form";
import FormLabel from "@/components/pages/signup/form/FormLabel";
import ErrorMessage from "@/components/pages/signup/form/ErrorMessage";

interface SignupFormData {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
}

interface Props {
  text: string;
  name: Path<SignupFormData>;
  register: UseFormRegister<SignupFormData>;
  errorMsg?: string;
}

const TextField = ({ text, name, register, errorMsg }: Props) => {
  return (
    <div className="py-[15px] flex border-t border-t-[#eee]">
      <FormLabel labelName={text} />
      <div className="w-full">
        <input
          className="w-full h-[40px] py-[10px] px-[11px] border bg-white border-[#c9c9c9] text-[#222] text-[13px]"
          type="text"
          {...register(name)}
        />
        {errorMsg && <ErrorMessage error={errorMsg} />}
      </div>
    </div>
  );
};

export default TextField;
