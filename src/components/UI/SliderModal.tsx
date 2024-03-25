import React from "react";

interface SliderModalProps {
    children: React.ReactNode;
}

function SliderModal({ children }: SliderModalProps) {
    return (
        <div className="bg-red-200 fixed z-[200] top-0 left-0 w-full h-full overflow-y-scroll">
            <div>
                <p>background</p>
            </div>
            {children}
        </div>
    );
}

export default SliderModal;
