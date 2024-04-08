import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/UI/CartIcon";
import GoBackIcon from "@/components/UI/GoBackIcon";

const TopHeaderIncludeIcon = ({
  title,
  icon,
  fixed,
}: {
  title: string;
  icon: string;
  fixed?: boolean;
}) => {
  return (
    <nav
      className={`h-[50px] px-[65px] z-50 shadow-md bg-white font-Pretendard ${
        fixed ? "flex sticky top-0 " : "flex items-center"
      }`}
    >
      <GoBackIcon />
      <div className=" w-full flex items-center justify-center">
        <h1 className="text-black text-[16px] font-bold">{title}</h1>
      </div>

      {icon !== "none" && (
        <div className="flex items-center absolute right-[16px] top-[13px] ">
          <Image
            src="/images/etc/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
          {icon === "cart" && <CartIcon />}
          {icon === "home" && (
            <Link href={"/"}>
              <Image
                src="/images/etc/home.svg"
                alt="cart-icon"
                width={24}
                height={22}
                className="ml-[12px] relative"
              />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default TopHeaderIncludeIcon;
