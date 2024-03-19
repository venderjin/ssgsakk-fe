"use client";

export default function Modal({ children }: { children: React.ReactNode }) {
    return <div className="bg-white fixed z-[200] top-0 w-full h-full overflow-y-scroll">{children}</div>;
}
