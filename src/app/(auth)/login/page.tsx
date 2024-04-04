import BackArrowHeader from "@/components/common/BackArrowHeader";
import LoginForm from "@/components/forms/LoginForm";

export default async function Page() {
  return (
    <>
      <BackArrowHeader title="로그인" />
      <LoginForm />
    </>
  );
}
