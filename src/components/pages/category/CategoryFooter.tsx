import { footerData, footerLoginData } from "@/libs/categoryData";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function CategoryFooter() {
  const session = await getServerSession(options);

  return (
    <div className="bg-[#555] pt-[30px] pb-[170px] text-center">
      {session
        ? footerLoginData.map((data, index) => (
            <div key={data.id}>
              {data.title === "로그아웃" ? (
                <button>{data.title}</button>
              ) : (
                <Link href={data.url}>
                  <span
                    className={`pr-[10px] font-Pretendard text-[12px] text-[#cccccc] align-middle ${
                      !index ? "" : "vetical-line"
                    } `}
                  >
                    {data.title}
                  </span>
                </Link>
              )}
            </div>
          ))
        : footerData.map((data, index) => (
            <Link key={data.id} href={data.url}>
              <span
                className={`pr-[10px] font-Pretendard text-[12px] text-[#cccccc] align-middle ${
                  !index ? "" : "vetical-line"
                } `}
              >
                {data.title}
              </span>
            </Link>
          ))}
    </div>
  );
}
