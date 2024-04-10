import React from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ChagnePasswordForm from "@/components/pages/mypage/manageMyInfo/ChagnePasswordForm";
import Footer from "@/components/layouts/Footer";
import { useGetServerToken } from "@/actions/useGetServerToken";
import { redirect } from "next/navigation";

const ChangePassword = async () => {
  const token = await useGetServerToken();

  async function changePasswordHandler(formData: FormData) {
    "use server";
    if (!token) return;
    const password = formData.get("password") as string;
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/auth/password-change`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log(data);
      redirect("/mypage/myInfoManage");
    } else {
      alert(data.message);
    }
  }

  return (
    <>
      <BackArrowHeader title="비밀번호 변경" />
      <ChagnePasswordForm changePassword={changePasswordHandler} />
      <Footer />
    </>
  );
};

export default ChangePassword;
