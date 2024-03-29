import { useState, useEffect } from "react";
import { beforesignupAgreementData } from "@/libs/agreementData";
import { BeforeSignupAgreementType } from "@/types/agreementType";
import { on } from "events";

type CheckBoxType = {
  [key: string]: boolean;
};

const BeforeSignupAgreement = ({
  onChangeAgreement,
}: {
  onChangeAgreement: (agree: boolean) => void;
}) => {
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxType>({
    terms01: false,
    terms02: false,
    terms03: false,
    terms04: false,
    terms05: false,
    terms06: false,
    checkAll: false,
  });

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const updateCheckboxes = { ...checkBoxes };
    if (name === "checkAll") {
      Object.keys(checkBoxes).forEach((key) => {
        updateCheckboxes[key] = checked;
      });
      setCheckBoxes(updateCheckboxes);
    } else {
      updateCheckboxes[name] = checked;
      setCheckBoxes(updateCheckboxes);
      checkAll(updateCheckboxes);
    }
  };

  const checkAll = (updateCheckboxes: CheckBoxType) => {
    const { terms01, terms02, terms03, terms04, terms05, terms06 } =
      updateCheckboxes;

    // 모든 체크박스가 true이면 checkAll도 true로 설정
    if (terms01 && terms02 && terms03 && terms04 && terms05 && terms06) {
      setCheckBoxes((prevState) => ({ ...prevState, checkAll: true }));
    } else {
      // 하나라도 false인 경우 checkAll을 false로 설정
      setCheckBoxes((prevState) => ({ ...prevState, checkAll: false }));
    }
  };

  const onSubmitHandler = () => {
    if (!checkBoxes.checkAll) {
      alert("모든 약관에 동의해주세요.");
      return;
    }

    onChangeAgreement(true);
  };

  return (
    <div className="px-[20px] pt-[15px]">
      <div className="flex  items-center mb-[10px] ">
        <input
          checked={checkBoxes.checkAll}
          onChange={onChangeCheckbox}
          type="checkbox"
          id="checkAll"
          name="checkAll"
          title="checkAll"
          className={`
                ${
                  checkBoxes.checkAll
                    ? "bg-[position:0px_-300px]"
                    : "bg-[position:0px_-200px]"
                }
                appearance-none mr-[10px] w-[17px] h-[17px] bg-no-repeat bg-check-icon  bg-[length:17px_400px]`}
        />
        <label
          className="font-bold w-[80%]  text-[12px] text-[#222] mr-[20px]"
          htmlFor="checkAll"
        >
          약관 전체 동의
        </label>
      </div>
      <div className="pl-[10px]">
        {beforesignupAgreementData.map(
          (bigTerm: BeforeSignupAgreementType, index) => (
            <div
              className="pb-[10px] [mt-[10px] border-t border-t-[#f0f0f0]"
              key={index}
            >
              <div className="my-[15px] text-[13px] text-[#444] font-bold">
                <h4>{bigTerm.title}</h4>
              </div>
              <ul>
                {bigTerm.terms.map((term) => (
                  <li className="my-[10px]" key={term.id}>
                    <div className="flex content-center items-center">
                      <div>
                        <input
                          type="checkbox"
                          id={term.type}
                          name={term.type}
                          checked={checkBoxes[term.type]}
                          onChange={onChangeCheckbox}
                          className={`${
                            checkBoxes[term.type]
                              ? "bg-[position:0px_-300px]"
                              : "bg-[position:0px_-200px]"
                          }
                            appearance-none mr-[10px] w-[17px] h-[17px] bg-no-repeat bg-check-icon  bg-[length:17px_400px]`}
                        />
                      </div>
                      <label
                        className="w-[80%]  text-[12px] text-[#222] mr-[20px]"
                        htmlFor={term.type}
                      >
                        {term.title}
                      </label>
                      <button
                        onClick={() => {
                          window.open(term.content);
                        }}
                        className="w-[80px] h-[22px] border border-[#e0e0e0] bg-[#f5f5f5] text-[13px] text-[#222]"
                        type="button"
                      >
                        내용보기
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      <div className="mt-[10px] mb-[30px]">
        <button
          onClick={onSubmitHandler}
          className="bg-primary-red h-[48px] w-full text-[#fff] text-[18px]"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default BeforeSignupAgreement;
