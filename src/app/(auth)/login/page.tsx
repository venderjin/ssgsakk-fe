import BackArrowHeader from "@/components/common/BackArrowHeader";
import LoginForm from "@/components/forms/LoginForm";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) {
  const retUrl = String(searchParams.retUrl);

  return (
    <>
      <BackArrowHeader title="로그인" />
      <LoginForm retUrl={retUrl} />
    </>
  );
}
