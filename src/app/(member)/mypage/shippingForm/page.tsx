import { Suspense } from "react";
import ShippingForm from "@/components/pages/mypage/shippingList/ShippingForm";

const ShippingFormPage = () => {
  return (
    <Suspense>
      <ShippingForm />
    </Suspense>
  );
};

export default ShippingFormPage;
