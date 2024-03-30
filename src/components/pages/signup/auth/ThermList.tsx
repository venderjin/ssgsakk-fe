import { useState, useEffect } from "react";
import { AgreementType } from "@/types/agreementType";
import { authAgreementData } from "@/libs/agreementData";

type CheckBoxType = {
    [key: string]: boolean;
};

const ThermList = ({ onChangeAgreementList }: { onChangeAgreementList: (data: CheckBoxType) => void }) => {
    const [checkBoxes, setCheckBoxes] = useState<CheckBoxType>({
        termsPrivacy: false,
        termsUnique: false,
        termsService: false,
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
        const { termsPrivacy, termsUnique, termsService } = updateCheckboxes;

        // 모든 체크박스가 true이면 checkAll도 true로 설정
        if (termsPrivacy && termsUnique && termsService) {
            setCheckBoxes((prevState) => ({ ...prevState, checkAll: true }));
        } else {
            // 하나라도 false인 경우 checkAll을 false로 설정
            setCheckBoxes((prevState) => ({ ...prevState, checkAll: false }));
        }
    };

    useEffect(() => {
        onChangeAgreementList(checkBoxes);
    }, [checkBoxes, onChangeAgreementList]);

    return (
        <section className="pt-[20px] font-Pretendard">
            <ul>
                {authAgreementData.map((term: AgreementType, index) => (
                    <li
                        className={`block relative py-[14px] px-[15px] bg-[#fff] text-[13px] text-[#5d6065] leading-4 ${
                            index !== 0 ? "border-t border-t-[1px solid #f0f0f0]" : ""
                        }`}
                        key={term.id}
                    >
                        <span className="flex content-center items-center">
                            <input
                                checked={checkBoxes[term.type]}
                                onChange={onChangeCheckbox}
                                type="checkbox"
                                name={term.type}
                                id={term.type}
                                className={`
                ${checkBoxes[term.type] ? "bg-[position:0px_-300px]" : "bg-[position:0px_-200px]"}
                appearance-none mr-[10px] w-[17px] h-[17px] bg-no-repeat bg-check-icon  bg-[length:17px_400px]`}
                            />
                            <label htmlFor={term.type}>{term.title}</label>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ThermList;
