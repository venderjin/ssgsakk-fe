import React from "react";

import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import BottomHeader from "@/components/layouts/BottomHeader";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingUp from "@/components/UI/FloatingUp";
import FloatingLeft from "@/components/UI/FloatingLeft";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TopHeader />
            <BottomHeader />
            {/* TopHeader and BottomHeader */}
            {children}
            {/* Footer and BottomNav */}
            <FloatingUp />
            <FloatingLeft />
            <Footer />
            <BottomNav />
        </>
    );
}
