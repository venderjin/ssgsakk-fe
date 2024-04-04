import SocialSignupConfirm from "@/components/pages/signup/form/SocialSignupConfirm";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return (
    <SocialSignupConfirm
      userEmail={searchParams.userEmail}
      oauthId={searchParams.oauthId}
    />
  );
};

export default Page;
