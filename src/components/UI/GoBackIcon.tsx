"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const GoBackIcon = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center"
    >
      <Image
        src="/images/etc/blackArrow.svg"
        alt="back-icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default GoBackIcon;
