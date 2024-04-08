import Image from "next/image";
import Link from "next/link";

import HomeSearch from "../pages/home/HomeSearch";
import HomeShoppingmallSelector from "@/components/pages/home/HomeShoppingmallSelector";
import CartIcon from "../UI/CartIcon";

const TopHeader = () => {
    return (
        <>
            <header className="w-full bg-white">
                <div className="w-full flex justify-between items-center py-[8px]  pr-[10px] gap-2">
                    <div className="flex gap-[3px] items-center w-[113px] h-[14px] ">
                        <Link href="/">
                            <Image src="/images/home/ssgLogo.svg" alt="SSG" width={86} height={40} priority={true} className="pl-[16px]" />
                        </Link>
                        <HomeShoppingmallSelector />
                    </div>
                    <HomeSearch />
                    <div className="flex items-center">
                        <Image src="/images/home/chatbotLogo.png" alt="Chatbot" width={26} height={26} className="mr-[10px]" />
                        <CartIcon />
                    </div>
                </div>
            </header>
        </>
    );
};

export default TopHeader;
