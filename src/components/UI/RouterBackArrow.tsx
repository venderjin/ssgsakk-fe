"use client";
import { useRouter } from "next/navigation";

const RouterBackArrow = () => {
    const router = useRouter();
    return <button onClick={() => router.back()} className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"></button>;
};

export default RouterBackArrow;
