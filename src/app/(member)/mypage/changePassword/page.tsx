import React from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ChagnePasswordForm from "@/components/pages/mypage/manageMyInfo/ChagnePasswordForm";
import Footer from "@/components/layouts/Footer";
import { getServerToken } from "@/actions/getServerToken";
import { redirect } from "next/navigation";

const changePassword = async () => {
  async function changePassword(formData: FormData) {
    "use server";

    const password = formData.get("password") as string;
    const token = await getServerToken();

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
      <ChagnePasswordForm changePassword={changePassword} />
      <Footer />
    </>
  );
};

export default changePassword;
