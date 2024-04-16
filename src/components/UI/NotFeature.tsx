"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function NotFeature() {
    const router = useRouter();

    return (
        <div className="bg-white w-full h-screen justify-center items-center flex flex-col">
            <div className="bg-red-200 w-[350px] h-auto">
                <Image src="https://ssgsakk-bucket.s3.ap-northeast-2.amazonaws.com/LOGO.png" alt="ssgssakLogo" width={350} height={150} />
            </div>
            <p className="font-Pretendard font-bold text-[20px] mt-[30px] text-center">🛠 개발중인 페이지입니다. 🛠</p>
            <div className="mt-[30px] justify-center flex">
                <button onClick={() => router.back()} className="text-white px-[40px] py-[15px] bg-[#000000] text-[15px] rounded-lg font-Pretendard">
                    이전으로 돌아가기
                </button>
            </div>
        </div>
    );
}
