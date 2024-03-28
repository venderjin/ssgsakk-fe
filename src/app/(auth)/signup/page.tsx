"use client";
import { useSearchParams } from "next/navigation";
import SignupForm from "@/components/pages/signup/form/SignupForm";

const Page = () => {
  const params = useSearchParams();
  const userEmail = params.get("userEmail");

  return <SignupForm userEmail={userEmail || ""} />;
};

export default Page;
