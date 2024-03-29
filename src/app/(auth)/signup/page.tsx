// "use client";
import React, { Suspense } from "react";
import SignupForm from "@/components/pages/signup/form/SignupForm";

const Page = () => {
    return (
        <Suspense>
            <SignupForm />;
        </Suspense>
    );
};

export default Page;
