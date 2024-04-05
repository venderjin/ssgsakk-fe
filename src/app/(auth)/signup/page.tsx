import SignupForm from "@/components/pages/signup/form/SignupForm";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  async function createUser(signupForm: FormData) {
    "use server";
    const userForm = {
      loginId: signupForm.get("id"),
      userName: signupForm.get("userName"),
      userEmail: signupForm.get("userEmail"),
      password: signupForm.get("password"),
    };

    console.log(userForm);
  }

  return (
    <SignupForm
      createUser={createUser}
      userEmail={searchParams.userEmail}
      oauthId={searchParams.oauthId}
    />
  );
};

export default Page;
