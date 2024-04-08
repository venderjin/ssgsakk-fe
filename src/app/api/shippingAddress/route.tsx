import { NextResponse } from "next/server";
import { useGetServerToken } from "@/actions/useGetServerToken";

async function setDefaultShippingAddress(shippingAddressSeq: number) {
  const token = await useGetServerToken();
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
