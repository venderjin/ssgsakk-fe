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
          <p className="text-[15px] font-semibold mb-[40px]">
            해당 소셜계정으로 통합회원 가입을 진행하시겠습니까?{" "}
          </p>

          <p className="text-[13px] w-[220px]">
            통합회원 가입을 통해 포인트, 쿠폰 및<br /> 이벤트를 통해 다양한
            혜택을 누려보세요.
          </p>
        </div>
        <div>
          <div className="flex flex-col mt-[20px]">
            <div className="mt-[10px] mb-[10px] px-[10px]">
              <button
                onClick={() =>
                  router.push(
                    `/signup?userEmail=${userEmail}&oauthId=${oauthId}`
                  )
                }
                className="w-full bg-primary-red text-[#fff] text-[18px] h-[48px]"
              >
                가입하기
              </button>
            </div>
            <div className="mt-[10px] mb-[10px] px-[10px]">
              <button
                onClick={() => router.push("/")}
                className="w-full bg-[#4f4f4f] text-[#fff] text-[18px] h-[48px]"
              >
                홈으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSignupConfirm;
