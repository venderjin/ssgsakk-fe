import Link from "next/link";
import Image from "next/image";
import { myPageQuickMenuData } from "@/libs/myPageData";
import { LinkType } from "@/types/commonType";

const QuickMenu = () => {
  return (
    <section className="py-[50px] px-[16px]">
      <div>
        <strong className="text-[18px] text-[#222222]">자주 찾는 메뉴</strong>
      </div>

      <div className="mt-[18px]">
        <ul className="flex flex-wrap h-[310px] ">
          {myPageQuickMenuData.map((item: LinkType) => (
            <li
              key={item.id}
              className="basis-1/5  flex items-center justify-center text-center"
            >
              <Link href={item.url}>
                <Image
                  src={item.icon || "/"}
                  alt={item.name}
                  width={65}
                  height={65}
                />

                <div className="max-h-[20px] tracking-tight text-center leading-5">
                  <span className="text-[12px] text-[#666666] text-tight">
                    {item.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[50px] h-[45px] px-[16px] rounded-[10px] border-[2px] border-[#f5f5f5] flex items-center justify-around">
        <Link href={"/"} className="w-full flex justify-center items-center ">
          <span className="text-[#444444] text-[12px]">고객센터</span>
        </Link>

        <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[4px]" />

        <Link href={"/"} className="w-full flex justify-center items-center ">
          <span className="text-[#444444] text-[12px]">e-mail 상담/답변</span>
        </Link>
      </div>
    </section>
  );
};

export default QuickMenu;
