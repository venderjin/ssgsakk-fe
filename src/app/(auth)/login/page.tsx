import BackArrowHeader from "@/components/common/BackArrowHeader";
import LoginForm from "@/components/forms/LoginForm";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) {
  const callbackUrl = String(searchParams.callbackUrl);
  const error = String(searchParams.error);

  return (
    <>
      <BackArrowHeader title="로그인" />
      <LoginForm callbackUrl={callbackUrl} error={error} />
    </>
  );
}
