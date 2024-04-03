import { Suspense } from "react";
import ShippingForm from "@/components/pages/mypage/shippingList/ShippingForm";
import Footer from "@/components/layouts/Footer";

const ShippingFormPage = () => {
  return (
    <Suspense>
      <ShippingForm />
      <Footer />
    </Suspense>
  );
};

export default ShippingFormPage;
