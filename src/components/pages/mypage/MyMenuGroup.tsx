import Link from "next/link";
import { myPageMenuGroupData } from "@/libs/myPageData";
import { MenuGroupType } from "@/types/commonType";

const MyMenuGroup = () => {
  return (
    <section>
      <hr className="h-[8px] bg-[#f5f5f5] " />
      {myPageMenuGroupData.map((group: MenuGroupType) => (
        <div key={group.group} className="py-[20px] px-[16px]">
          <h3 className="font-bold text-[16px] text-[#222222]">
            {group.group}
          </h3>
          <ul className="mt-[16px] flex flex-wrap">
            {group.menus.map((menu) => (
              <li
                key={menu.id}
                className="basis-1/2 text-[14px] text-[#777777] h-[30px]"
              >
                <Link href={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default MyMenuGroup;
