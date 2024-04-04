"use client";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import { useRouter } from "next/navigation";

const SocialSignupConfirm = ({
  userEmail,
  oauthId,
}: {
  userEmail: string;
  oauthId: string;
}) => {
  const router = useRouter();
  return (
    <>
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      <div className="bg-gray-100 px-[20px] py-[30px] font-Pretendard min-h-[350px] flex flex-col justify-center">
        <div className="text-center flex flex-col items-center mb-[40px]">
          <h3 className="font-bold text-[19px] mb-[10px]">신규회원입니다</h3>
          <p className="text-[15px] font-semibold mb-[20px]">
            해당 소셜계정으로 통합회원 가입을 진행하시겠습니까?{" "}
          </p>

          <p className="text-[12px] w-[220px]">
            통합회원 가입을 통해 포인트, 쿠폰 및 이벤트를 통해 다양한 혜택을
            누려보세요.
          </p>
        </div>
        <div>
          <div className="flex justify-around mt-[20px]">
            <button
              onClick={() => router.push("/")}
              className="w-[150px] h-[40px] bg-[#353535] text-white rounded-[20px]"
            >
              취소
            </button>
            <button
              onClick={() =>
                router.push(`/signup?userEmail=${userEmail}&oauthId=${oauthId}`)
              }
              className="w-[150px] h-[40px] bg-primary-red text-white rounded-[20px]"
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSignupConfirm;
