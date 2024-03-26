import timeFormatter from "@/utils/timeFormatter";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import ThermList from "./ThermList";

const INIT_TIME = 180;
type CheckBoxType = {
  [key: string]: boolean;
};

const EmailAuthPage = ({
  sendUserEmail,
}: {
  sendUserEmail: (email: string) => void;
}) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [authCode, setAuthCode] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(INIT_TIME);
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxType>({
    termsPrivacy: false,
    termsUnique: false,
    termsService: false,
    checkAll: false,
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const onChangeAgreementList = (data: CheckBoxType) => {
    setCheckBoxes({ ...data });
    console.log(data);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "userEmail") setUserEmail(e.target.value);
    if (e.target.name === "authCode") setAuthCode(e.target.value);
  };

  const sendCodeHandler = () => {
    if (!checkBoxes.checkAll)
      return alert("개인정보 이용 및 제공 동의에 동의해주세요.");

    if (!emailRegex.test(userEmail))
      return alert("올바른 이메일 형식이 아닙니다.");

    sendCodeToServer();
  };

  const sendCodeToServer = async () => {
    const res = await fetch(`${process.env.BASE_URL}/auth/mail-send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    });

    const data = await res.json();
    //정상적으로 발송
    if (res.ok) {
      alert("인증코드가 발송되었습니다.");
      setIsOpen(true);
      setRemainingTime(INIT_TIME);
    }

    //이미 존재하는 회원
    if (res.status === 409) {
      if (
        confirm(
          "해당 이메일로 가입된 계정이 있습니다. \n로그인 화면으로 이동하시겠습니까?"
        )
      ) {
        redirect("/login");
      } else {
        setUserEmail("");
      }
    }
  };

  //인증 코드 입력
  const confirmHandler = async () => {
    if (authCode === "") return alert("인증코드를 입력하세요.");

    const res = await fetch(`${process.env.BASE_URL}/auth/mail-check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, authNum: authCode }),
    });

    if (res.ok) {
      alert("인증이 완료되었습니다.");
      sendUserEmail(userEmail);
    }

    if (res.status === 406) {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, remainingTime]);

  return (
    <div className=" bg-[#f0f0f0] px-[15px] pb-[20px]">
      {/* 약관동의 */}
      <ThermList onChangeAgreementList={onChangeAgreementList} />

      {/* 이메일 인증 */}
      <section className="h-[100px] mt-[20px]">
        <form className="bg-[#fff]" action={sendCodeHandler}>
          <div className="pt-[13px] pb-[12px] px-[15px]">
            <input
              className="w-full h-[25px] text-[14px] text-[#222]"
              name="userEmail"
              value={userEmail}
              required
              type="text"
              placeholder="이메일주소 입력"
              onChange={onChangeHandler}
            />
          </div>
          {!isOpen && (
            <button
              type="submit"
              className="base-btn bg-[#ff5452] text-white font-medium"
            >
              인증코드 발송
            </button>
          )}
        </form>

        {/* 인증코드 발송 버튼 클릭 시 노출 */}
        {isOpen && (
          <>
            <div className="flex flex-col h-[72.5px] pt-[13px] pb-[12px] px-[15px] border-t border-t-[#f0f0f0] bg-[#fff]">
              <div>
                <input
                  className="h-[25px] text-[14px] text-[#222]"
                  type="text"
                  placeholder="인증번호"
                  name="authCode"
                  onChange={onChangeHandler}
                />

                <span
                  onClick={sendCodeHandler}
                  className="float-right text-[14px] text-[#222] underline"
                >
                  재전송
                </span>
              </div>
              <span className="pt-[5px] text-[11px] text-[#ff6967] ">
                {remainingTime === 0
                  ? "인증번호 유효시간이 초과되었습니다."
                  : `남은시간: ${timeFormatter(remainingTime)}`}
              </span>
            </div>

            <button
              onClick={confirmHandler}
              className="base-btn bg-[#ff5452] text-white font-medium"
            >
              확인
            </button>
          </>
        )}
      </section>

      {/* 안내문구 */}
      <section className=" h-[74px] mt-[90px] font-Pretendard">
        <ul className="h-full text-[12px] text-[#222]">
          <li className="relative pl-[7px] ">
            <span className="absolute h-[4px] w-[4px] left-0 top-[3px] pr-[3px] text-[red]">
              *
            </span>
            본인 명의의 이메일 정보를 정확히 입력하여 주시기 바랍니다.{" "}
          </li>
          <li className=" relative pl-[7px] mt-[7px]">
            <span className="absolute left-0 top-[3px] text-[red]">* </span>
            타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라
            처벌(3년 이하의 징역형 또는 1천만원 이하의 벌금형) 받을수 있습니다.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EmailAuthPage;
