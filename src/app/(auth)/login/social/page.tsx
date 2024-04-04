import React from "react";

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log("test", searchParams);
  return <div></div>;
};

export default Page;
