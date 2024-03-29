import Image from "next/image";
import CardTtile from "@/components/UI/CardTtile";

const AuthCard = ({ onChagneAuthType }: { onChagneAuthType: (type: string) => void }) => {
    return (
        <div className="font-Pretendard text-[#222]">
            <CardTtile title="본인인증" />

            <div className=" my-[30px] px-[20px]">
                <p className="text-[14px] text-center">자주 이용하시는 인증 수단으로 본인인증을 진행해주세요.</p>

                {/* 인증수단 선택 */}
                <div className="flex flex-row justify-center">
                    <div className="mt-[10px] w-[350px] flex justify-between">
                        <div
                            onClick={() => onChagneAuthType("phone")}
                            className="h-[110px] w-[170px] pt-[18px] border border-[#e0e0e0] text-[15px] flex flex-col items-center"
                        >
                            <div className="w-[35px] h-[44px]">
                                <Image src={"/images/etc/authPhone.svg"} alt={"휴대폰 인증"} width={35} height={44} />
                            </div>
                            <span className="mt-[8px]">휴대폰 인증</span>
                        </div>

                        <div
                            onClick={() => onChagneAuthType("email")}
                            className="h-[110px] w-[170px] pt-[18px] border border-[#e0e0e0] text-[15px] flex flex-col items-center"
                        >
                            <div className="w-[44px]">
                                <Image src={"/images/etc/authCard.png"} alt={"이메일 인증"} width={100} height={100} />
                            </div>
                            <span className="mt-[8px]">이메일 인증</span>
                        </div>
                    </div>
                </div>

                <ul className="mt-[20px]">
                    <li className="text-[12px] text-[#777] text-left pl-[7px]">
                        · 법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.
                    </li>
                    <li className="text-[12px] text-[#777] text-left pl-[7px]">
                        · 본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.
                        <br />
                        <em className="font-bold not-italic">
                            NICE평가정보(주) 고객센터 : 1600-1522
                            <br />
                            코리아크레딧뷰로(주) 고객센터 : 02-708-1000
                        </em>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthCard;
