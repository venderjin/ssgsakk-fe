"use client";
import Modal from "@/components/common/Modal";
import React, { useState } from "react";
import ModalHeader from "@/components/common/ModalHeader";
import LoginForm from "@/components/forms/LoginForm";
import Footer from "@/components/layouts/Footer";

export default function Page() {
    const [saveIdCheck, setSaveIdCheck] = useState(false);

    const onChangeSaveIdCheck = (data: boolean) => {
        setSaveIdCheck(data);
        console.log(saveIdCheck);
    };

    return (
        <Modal>
            <ModalHeader title={"로그인"} />
            <LoginForm onChangeSaveIdCheck={onChangeSaveIdCheck} />
            <Footer />
        </Modal>
    );
}
