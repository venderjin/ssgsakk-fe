import React from "react";
import TopHeader from "@/components/layouts/TopHeader";
import BottomNav from "@/components/layouts/BottomNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      {children}

      <BottomNav />
    </>
  );
}
