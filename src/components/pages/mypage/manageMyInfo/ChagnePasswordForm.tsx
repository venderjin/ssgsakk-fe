"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import regex from "@/utils/regex";
import ErrorMessage from "@/components/UI/ErrorMessage";

interface ChagnePasswordForm {
  password: string;
  passwordConfirm: string;
}
const schema = yup.object().shape({
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(regex.password, "8~20자의 영문, 숫자를 모두 포함해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), ""], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력해주세요"),
});

const ChagnePasswordForm = ({
  changePassword,
}: {
  changePassword: (formData: FormData) => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<ChagnePasswordForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <div className="pt-[13px] pb-[30px] px-[5px] bg-[#f2f2f2] font-Pretendard">
      <div className="bg-[#fff] p-[20px]">
        <form action={changePassword}>
          <div className="py-[5px]">
            <div className="flex items-center">
              <label className="text-[12px] text-[#222] min-w-[76px] mr-[10px]">
                새 비밀번호
              </label>
              <input
                className="w-full h-[34px] py-[8px] px-[8px] border bg-[#fff] border-[#c9c9c9] text-[#222] text-[13px]"
                type="password"
                {...register("password")}
              />
            </div>
            <div className="pl-[85px]">
              {errors.password && (
                <ErrorMessage error={errors.password.message} />
              )}
            </div>
          </div>

          <div className="py-[5px]">
            <div className="flex items-center">
              <label className="text-[12px] text-[#222] min-w-[76px] mr-[10px]">
                비밀번호 재확인
              </label>
              <input
                className="w-full h-[34px] py-[8px] px-[8px] border bg-[#fff] border-[#c9c9c9] text-[#222] text-[13px]"
                type="password"
                {...register("passwordConfirm")}
              />
            </div>
            <div className="pl-[85px]">
              {errors.passwordConfirm && (
                <ErrorMessage error={errors.passwordConfirm.message} />
              )}
            </div>
          </div>

          <p className="pt-[14px] pb-[5px] text-[10px] text-[#898989]">
            <span>* </span>
            <strong>주의하세요. </strong>
            아이디와 같은 비밀번호나 주민등록번호, 생일, 학번, 전화번호 등
            개인정보와 관련된 숫자, 연속된 숫자, 동일 반복된 숫자 등 다른
            사람이쉽게 알아낼 수 있는 비밀번호는 사용하지 않도록 주의하여 주시기
            바랍니다.
          </p>
          <div className="mt-[20px] mb-[30px] px-[20px]">
            <button
              type="submit"
              className="w-full bg-primary-red text-[#fff] text-[18px] h-[48px]"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChagnePasswordForm;
