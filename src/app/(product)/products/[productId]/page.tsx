import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductInformation from "@/components/pages/products/detail/ProductInformation";
import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import BottomActionButtons from "@/components/layouts/BottomActionButtons";
import ProductPageSwitchHeader from "@/components/layouts/ProductPageSwitchHeader";
import ProductReview from "@/components/pages/products/detail/ProductReview";
import QuestionAndAnswer from "@/components/pages/products/detail/QuestionAndAnswer";
import "./productDetail.css";
import { GetProductReviewList } from "@/actions/review";
import { GetOption } from "@/actions/product";
import Footer from "@/components/layouts/Footer";
import GlobalModal from "@/components/common/GlobalModal";

async function getProductData(productId: number) {
    const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.ok) {
        // productId;
        const data = await res.json();
        return data.result;
    }

    if (res.status === 400) {
        console.log("잘못된 요청입니다.");
    }
}

const page = async ({ params }: { params: { productId: number } }) => {
    const productData = await getProductData(params.productId);
    const reviewList = await GetProductReviewList(params.productId);
    const optionData = await GetOption(params.productId);

    return (
        <>
            <TopHeader />
            <ProductPageSwitchHeader reviewCount={productData.reviewCount} />
            <ImageSlider imageList={productData.contents} />
            <ProductInformation reviewList={reviewList} productData={productData} />
            <ProductReview reviewList={reviewList} averageRating={productData.averageRating} reviewCount={productData.reviewCount} />
            <GlobalModal />
            <QuestionAndAnswer />
            <BottomActionButtons
                productSeq={params.productId}
                productName={productData.productName}
                productPrice={productData.productPrice}
                discountPercent={productData.discountPercent}
                vendor={productData.vendor}
                deliveryType={productData.deliveryType}
                contents={productData.contents}
                optionData={optionData}
            />
            <Footer />
            <FloatingLeft />
            <FloatingUp />
        </>
    );
};

export default page;
