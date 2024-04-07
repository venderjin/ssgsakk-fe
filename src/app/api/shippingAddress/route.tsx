import { NextResponse } from "next/server";
import { getServerToken } from "@/actions/getServerToken";

async function setDefaultShippingAddress(shippingAddressSeq: number) {
  const token = await getServerToken();
  const res = await fetch(
    `${process.env.BASE_URL}/shipping-addr/${shippingAddressSeq}/default`,
    {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (res.ok) {
    return data;
  } else return data;
}

export async function PATCH(request: any) {
  try {
    const formData = await request.formData();
    const shippingAddressSeq = formData.get("shippingAddressSeq");

    const response = await setDefaultShippingAddress(shippingAddressSeq);

    return NextResponse.json({ success: true, message: response.message });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
