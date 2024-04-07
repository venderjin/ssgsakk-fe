import Link from "next/link";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import Footer from "@/components/layouts/Footer";
import { myInfoManageMenu } from "@/libs/myPageData";

const myInfoManage = () => {
  return (
    <>
      <BackArrowHeader title="내 정보 관리" />
      <section className="font-Pretendard">
        {myInfoManageMenu.map((menu) => (
          <Link
            key={menu.id}
            href={menu.url}
            className="border-t border-t-[#e7e7e7] py-[15px] px-[15px] flex items-center justify-between"
          >
            <span className="text-[14px]">{menu.name}</span>
            <RightHalfTriangle />
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default myInfoManage;
