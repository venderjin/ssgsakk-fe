import SignupForm from "@/components/pages/signup/form/SignupForm";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return (
    <>
      <SignupForm
        userEmail={searchParams.userEmail}
        oauthId={searchParams.oauthId}
      />
    </>
  );
};

export default Page;
