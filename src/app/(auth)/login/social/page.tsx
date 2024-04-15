import { redirect } from "next/navigation";
import SocialSignIn from "@/components/pages/login/SocialSignIn";
import LoadMypage from "@/components/pages/login/LoadMypage";

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const { state, oAuthId, userName, userEmail, token } = searchParams;

  if (state === "2") {
    redirect(`/signup/social?userEmail=${userEmail}&oauthId=${oAuthId}`);
  }

  return (
    <>
      {userName && token && <SocialSignIn userName={userName} token={token} />}
    </>
  );
};

export default Page;
