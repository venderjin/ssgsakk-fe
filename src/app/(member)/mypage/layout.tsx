"use client";
import Footer from "@/components/layouts/Footer";
import BackArrowHeader from "@/components/common/BackArrowHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackArrowHeader title="MY SSG" />
      {children}
      <Footer />
    </>
  );
}
