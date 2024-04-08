import BackArrowHeader from "@/components/common/BackArrowHeader";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingUp from "@/components/UI/FloatingUp";
import FloatingLeft from "@/components/UI/FloatingLeft";
import LikeHeader from "@/components/pages/mypage/like/LikeHeader";
import { useGetServerToken } from "@/actions/useGetServerToken";

const MyLikePage = async ({
    params,
    searchParams,
}: {
    params: { categoryId: number };
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> => {
    const folder = searchParams.folder;
    // const token = await useGetServerToken();

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
