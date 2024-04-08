import BackArrowHeader from "@/components/common/BackArrowHeader";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingUp from "@/components/UI/FloatingUp";
import FloatingLeft from "@/components/UI/FloatingLeft";
import LikeHeader from "@/components/pages/mypage/like/LikeHeader";
import { useGetServerToken } from "@/actions/useGetServerToken";

async function getLikedProductList(token: string) {
    const response = await fetch(`${process.env.BASE_URL}/likes/user/product`, {
        headers: {
            Authorization: token,
        },
    });
    const data = await response.json();
    // console.log(data.result);
    return data.result;
}

const MyLikePage = async () => {
    const token = await useGetServerToken();
    const likedProductList = await getLikedProductList(token);
    return (
        <>
            <BackArrowHeader title="좋아요" />
            <LikeHeader />
            <FloatingLeft />
            <FloatingUp />
            <BottomNav />
        </>
    );
};

export default MyLikePage;
