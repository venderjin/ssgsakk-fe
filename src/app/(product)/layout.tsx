import React from "react";
import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import BottomNav from "@/components/layouts/BottomNav";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TopHeader />
            {children}
            <Footer />
            <BottomNav />
        </>
    );
}
