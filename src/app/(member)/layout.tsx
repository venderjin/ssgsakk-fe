"use client";
import Footer from "@/components/layouts/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
