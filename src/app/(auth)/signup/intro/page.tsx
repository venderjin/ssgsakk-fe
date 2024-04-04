import BackArrowHeader from "@/components/common/BackArrowHeader";
import JoinIntroCard from "@/components/pages/signup/intro/JoinIntroCard";
import SimpleJoinList from "@/components/pages/signup/intro/SimpleJoinList";

export default async function Page() {
  return (
    <>
      <BackArrowHeader title="회원가입" />
      <JoinIntroCard />
      <SimpleJoinList />
    </>
  );
}
