"use server";

export async function GetOption(productSeq: number) {
  const res = await fetch(`${process.env.BASE_URL}/optionstock/${productSeq}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (res.ok) {
    return data.result;
  } else {
    console.log(data);
  }
}
