import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const { state, oAuthId, userName, userEmail, token } = searchParams;
  console.log(searchParams);

  if (state === "2") {
    redirect(`/signup/social?userEmail=${userEmail}&oauthId=${oAuthId}`);
  }

  return <></>;
};

export default Page;
