import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ShippingForm from "@/components/pages/mypage/shippingList/ShippingForm";
import Footer from "@/components/layouts/Footer";

const getShippingData = async (shippingAddressSeq: number, token: string) => {
  if (!shippingAddressSeq) return null;
  const res = await fetch(
    `${process.env.BASE_URL}/shipping-addr/${shippingAddressSeq}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (res.ok) return data.result;
  if (res.status === 500) alert(data.message);
  return null;
};

const ShippingFormPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) => {
  const session = await getServerSession(options);
  const shippingData = await getShippingData(
    searchParams.shippingAddressSeq,
    session?.user?.token || ""
  );
  const retUrl = String(searchParams.retUrl);

  return (
    <>
      <ShippingForm shippingData={shippingData} retUrl={retUrl} />
      <Footer />
    </>
  );
};

export default ShippingFormPage;
