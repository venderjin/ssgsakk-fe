import { useState, useEffect } from "react";
import { marketingAgreementData } from "@/libs/agreementData";
import { MarketingAgreementType, CheckListType } from "@/types/agreementType";

type CheckBoxType = {
    [key: string]: boolean;
};

const MarketingAgreeList = ({ onChangeMarketingAgreement }: { onChangeMarketingAgreement: (checkList: CheckBoxType) => void }) => {
    const [checkBoxes, setCheckBoxes] = useState<CheckBoxType>({
        terms01: false,
        terms02: false,
    });

    const [checkboxList, setCheckboxList] = useState<CheckBoxType>({
        emailS: false,
        smsS: false,
        mailS: false,
        telS: false,
        email: false,
        sms: false,
    });

    const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;

        const updateCheckboxes = { ...checkBoxes };
        updateCheckboxes[name] = checked;
        setCheckBoxes(updateCheckboxes);
    };

    const onChangeCheckboxList = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;

        const updateCheckboxes = { ...checkboxList };
        updateCheckboxes[name] = checked;
        setCheckboxList(updateCheckboxes);
    };

    useEffect(() => {
        onChangeMarketingAgreement({ ...checkboxList });
    }, [checkboxList, onChangeMarketingAgreement]);

    return (
        <div className="px-[20px] pt-[15px]">
            <div className="pl-[10px]">
                {marketingAgreementData.map((bigTerm: MarketingAgreementType, index) => (
                    <div className="pb-[10px] mt-[10px] border-b border-b-[#eee]" key={index}>
                        <div className="my-[15px] text-[14px] text-[#444] font-bold">
                            <h4>{bigTerm.title}</h4>
                        </div>
                        <ul>
                            {bigTerm.terms.map((term) => (
                                <li className="my-[10px]" key={term.id}>
                                    <div className="flex content-center items-top">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name={term.type}
                                                onChange={onChangeCheckbox}
                                                checked={checkBoxes[term.type]}
                                                className={`${checkBoxes[term.type] ? "bg-[position:0px_-15px]" : "bg-[position:-20px_-15px]"}
                            appearance-none mr-[10px] mt-[4px] w-[18px] h-[18px] bg-no-repeat bg-agree-icon  bg-[length:250px_250px]`}
                                            />
                                        </div>
                                        <label className="w-[80%]  text-[14px] text-[#222] mr-[20px]" htmlFor={term.type}>
                                            <strong className="mr-[4px]">(선택)</strong>
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
                        <ul className="flex pt-[5px]  pl-[17px] border-t border-t-[#eee] gap-5">
                            {bigTerm.checkList.map((check: CheckListType) => (
                                <li key={check.id}>
                                    <div className="flex content-center items-center ">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name={check.type}
                                                disabled={checkBoxes[check.parent] ? false : true}
                                                onChange={onChangeCheckboxList}
                                                checked={checkboxList[check.type]}
                                                className={`${
                                                    !checkBoxes[check.parent]
                                                        ? "bg-[position:-40px_-15px]"
                                                        : checkboxList[check.type]
                                                        ? "bg-[position:0px_-15px]"
                                                        : "bg-[position:-20px_-15px]"
                                                }
                            appearance-none mr-[5px] mt-[4px] w-[18px] h-[18px] bg-no-repeat bg-agree-icon  bg-[length:250px_250px]`}
                                            />
                                        </div>
                                        <label className="text-[14px] text-[#222]" htmlFor={check.type}>
                                            {check.title}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-[5px]  pl-[17px] text-[13px] text-primary-red ">
                            마케팅 정보 수신 동의를 하시면 {bigTerm.title} 서비스 및 이벤트 정보를 받으실 수 있습니다.
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-[15px]">
                <p className="text-[13px] text-[#666] font-bold ">선택 항목에 동의하지 않더라도 SSG.COM회원가입 및 기본 서비스를 이용하실 수 있습니다.</p>
            </div>
        </div>
    );
};

export default MarketingAgreeList;
