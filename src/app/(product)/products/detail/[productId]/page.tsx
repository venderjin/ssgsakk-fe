import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductInformation from "@/components/pages/products/detail/ProductInformation";
import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import BottomActionButtons from "@/components/layouts/BottomActionButtons";
import ProductPageSwitchHeader from "@/components/layouts/ProductPageSwitchHeader";

const page = async ({ params }: { params: { productId: number } }) => {
  return (
    <>
      <TopHeader />
      <ProductPageSwitchHeader />
      <ImageSlider productId={params.productId} />
      <ProductInformation productId={params.productId} />
      <BottomActionButtons productId={params.productId} />
      <FloatingLeft />
      <FloatingUp />
    </>
  );
};

export default page;
