import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ShippingForm from "@/components/pages/mypage/shippingList/ShippingForm";
import Footer from "@/components/layouts/Footer";
import { ShippingInfoType } from "@/types/memberInfoType";

export const updateShippingData = async (
  shippingData: ShippingInfoType,
  token: string
) => {
  const res = await fetch(
    `${process.env.BASE_URL}/shipping-addr/${shippingData.shippingAddressSeq}`,
    {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shippingData),
    }
  );
  const data = await res.json();
  console.log(data);
  if (res.ok) return data.msg;
  if (res.status === 500) alert(data.message);
  return null;
};

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

  return (
    <>
      <ShippingForm shippingData={shippingData} />
      <Footer />
    </>
  );
};

export default ShippingFormPage;
